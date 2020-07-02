import Mail from '../../utils/configEmail/configEmail'
import { EmailForgotProps } from 'Contracts/events'

/**
 * @function sendMailForgotPassWord
 *
 * Sending confirmation email to registered users.
 *
 * @param mail
 */
const sendMailForgotPassWord = async (
  mailProps: EmailForgotProps
): Promise<any> => {
  await Promise.resolve(
    setTimeout(() => {
      // Mail.to = mailProps.email;
      Mail.template = 'auth/forgot_password'
      Mail.context = { token: mailProps.token }
      Mail.sendMail()
    }, 3600)
  )

  return 'sent'
}

export default {
  sendMailForgotPassWord,
}
