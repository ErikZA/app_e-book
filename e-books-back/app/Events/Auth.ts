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
      Mail.html = '/mail/auth/forgot_password.html'
      Mail.subject = 'Password Recovery'
      Mail.to = mailProps.email
      Mail.context = { token: mailProps.token }
      Mail.sendMail()
    }, 3600)
  )
  return Mail.response
}

export default {
  sendMailForgotPassWord,
}
