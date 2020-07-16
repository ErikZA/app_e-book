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
  public async auth ({ request, auth, response }: HttpContextContract) {
    const data = await request.validate(AuthValidator)

    const token = await auth.attempt(data.email, data.password)

    return response.ok({
      ...token,
      ...data,
    })
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
        return response.ok({
          code: 200,
          message: 'Sending',
        })
      } catch (e) {
        return response.ok({
          code: 400,
          message: 'User not found.',
          exceptionMsg: e,
        })
      }
    }
  }

  public async resetPassword ({ request, response }: HttpContextContract) {
    const reset = request.only(['email', 'password', 'token'])

    try {
      const user = await User.findByOrFail('email', reset.email)
      const token = await UseToken.findByOrFail(
        'password_reset_token',
        reset.token
      )

      const now = new Date()
      if (now > new Date(token.passwordResetExpires.toJSON())) {
        return response.ok({
          code: 400,
          message: 'Token expired, try again',
        })
      }
      user.password = reset.password
      return await user.save()
    } catch (e) {
      return response.ok({
        code: 400,
        message: 'Cannot reset password, try again',
        exceptionMsg: e,
      })
    }
  }
}
