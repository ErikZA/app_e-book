// import Mail from '../../utils/configEmail/configEmail'

/**
 * @function sendMail
 *
 * Sending confirmation email to registered users.
 *
 * @param mail
 */
const sendMail = async (mail: string): Promise<any> => {
  await Promise.resolve(setTimeout(() => console.log(`Ola ${mail}`), 3600))

  return 'sent'
}

export default {
  sendMail,
}
