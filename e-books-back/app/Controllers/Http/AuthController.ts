import Event from '@ioc:Adonis/Core/Event'
import { DateTime } from 'luxon'
import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { randomBytes } from 'crypto'

import AuthValidator from 'App/Validators/AuthValidator'
import UseToken from 'App/Models/UseToken'

export interface EventsList {
  sendMailForgotPassWord: () => {};
}

export default class AuthController {
  /**
   * @method auth
   *
   * User Authentication
   */
  public async auth ({ request, auth }: HttpContextContract) {
    const data = await request.validate(AuthValidator)

    return await auth.attempt(data.email, data.password)
  }

  /**
   * Forgot Password
   */
  public async forgotPassword ({ request, response }: HttpContextContract) {
    const data = await request.only(['email'])
    const token = randomBytes(20).toString('hex')
    const now = new Date()
    now.setHours(now.getHours() + 1)
    if (data.email) {
      try {
        const user = await User.findByOrFail('email', data.email)
        const useToken = await UseToken.create({
          user_id: user.id,
          passwordResetToken: token,
          passwordResetExpires: DateTime.fromJSDate(now),
        })

        if (useToken) {
          Event.emit('auth:send_mail_forgot_passWord', {
            email: user.email,
            token: token,
          })
        }

        return useToken
      } catch (e) {
        return response.ok({
          code: 400,
          message: 'User not found.',
          exceptionMsg: e,
        })
      }
    }
  }
}
