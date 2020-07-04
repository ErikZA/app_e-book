import * as nodemailer from 'nodemailer'
import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
import handlebars from 'handlebars'
import fs from 'fs'

class Mail {
  constructor (
    public to?: string,
    public from?: string,
    public context?: string,
    public html?: string,
    public subject?: string
  ) {}

  public sendMail () {
    let mailOptions = {
      from: this.from,
      to: this.to,
      html: this.html,
      subject: this.subject,
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: Env.get('USER_EMAIL', 'email@gmail.com') as string,
        pass: Env.get('PASS_EMAIL', 'email@gmail.com') as string,
      },
    })

    const readHTMLFile = function (
      path: string,
      callback: (
        error?: NodeJS.ErrnoException | null,
        html?: string | null
      ) => void
    ) {
      fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
        if (err) {
          callback(err, null)
          throw err
        } else {
          callback(null, html)
        }
      })
    }

    readHTMLFile(
      Application.publicPath('resources') + mailOptions.html,
      (error, html) => {
        if (!error) {
          const template = handlebars.compile(html)
          const replacements = {
            token: String(this.context),
          }
          const htmlToSend = template(replacements)
          mailOptions.html = htmlToSend
          transporter.sendMail(
            {
              from: `E-book <${mailOptions.from}>`,
              to: mailOptions.to,
              subject: mailOptions.subject,
              html: mailOptions.html,
            },
            function (error: Error) {
              if (error) {
                console.log('Sent coldn\'t sent')
                console.log(error)
                return error.message
              } else {
                console.log('Success sent eamil')
                return 'Success!'
              }
            }
          )
        }
      }
    )
  }
}

export default new Mail()
