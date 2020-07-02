import * as nodemailer from 'nodemailer'
import Env from '@ioc:Adonis/Core/Env'
import hbs from 'nodemailer-express-handlebars'
import Application from '@ioc:Adonis/Core/Application'

class Mail {
  constructor (
    public to?: string,
    public context?: any,
    public template?: string
  ) {}

  public sendMail () {
    let mailOptions = {
      // from: Env.get('HOST_EMAIL', 'email@gmail.com') as string,
      from: 'erik_12_nf@live.com',
      to: Env.get('HOST_EMAIL', 'email@gmail.com') as string,
      context: this.context.token,
      template: this.template,
    }

    const transporter = nodemailer.createTransport({
      host: Env.get('HOST_EMAIL', 'email@gmail.com') as string,
      port: Number(Env.get('PORT_EMAIL', '00') as string),
      secure: false,
      auth: {
        user: Env.get('USER_EMAIL', 'email@gmail.com') as string,
        pass: Env.get('PASS_EMAIL', 'email@gmail.com') as string,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    console.log(Application.publicPath('mail'))
    transporter.use(
      'compile',
      hbs({
        viewEngine: 'handlebars',
        viewPath: Application.publicPath('mail'),
        extName: '.html',
      })
    )
    transporter.sendMail(mailOptions, function (error: Error) {
      console.log(mailOptions)

      if (error) {
        console.log('Error sent eamil: ' + error.message)
        return error.message
      } else {
        console.log('Success sent eamil')
        return 'Success!'
      }
    })
  }
}

export default new Mail()
