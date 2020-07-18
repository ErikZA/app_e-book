import * as nodemailer from "nodemailer";
import Env from "@ioc:Adonis/Core/Env";
import Application from "@ioc:Adonis/Core/Application";
import handlebars from "handlebars";
import fs from "fs";

interface Response {
  status: string;
  message: string;
}
class Mail {
  constructor(
    public response?: Response,
    public to?: string,
    public from?: string,
    public context?: {},
    public html?: string,
    public subject?: string
  ) {
    this.response = { status: "200", message: "Sending" };
  }

  public sendMail(): void {
    let mailOptions = {
      from: Env.get("USER_EMAIL", "email@gmail.com") as string,
      to: this.to,
      html: this.html,
      subject: this.subject,
    };

    const statusSend = {} as Response;

    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "380e009ef554d9",
        pass: "d8779c89ab911e",
      },
    });

    const readHTMLFile = function (
      path: string,
      callback: (
        error?: NodeJS.ErrnoException | null,
        html?: string | null
      ) => void
    ) {
      fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, html);
        }
        console.log(err);
      });
    };

    readHTMLFile(
      Application.publicPath("resources") + mailOptions.html,
      (error, html) => {
        if (!error) {
          const template = handlebars.compile(html);
          const replacements = this.context;
          const htmlToSend = template(replacements);
          mailOptions.html = htmlToSend;
          transporter.sendMail(
            {
              from: `${mailOptions.subject} <${mailOptions.from}>`,
              to: mailOptions.to,
              subject: mailOptions.subject,
              html: mailOptions.html,
            },
            function (error: Error) {
              if (error) {
                statusSend.status = "400";
                statusSend.message = error.message;
              } else {
                statusSend.status = "200";
                statusSend.message = "Email successfully sent";
              }
            }
          );
        } else {
          statusSend.status = "400";
          statusSend.message = error.message;
        }
        this.response = statusSend;
      }
    );
  }
}

export default new Mail();
