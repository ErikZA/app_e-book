import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Event from '@ioc:Adonis/Core/Event'

import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async store ({ request, response }: HttpContextContract) {
    const data = await request.validate(UserValidator)
    let user = new User()
    user.name = data.name
    user.email = data.email
    user.password = data.password
    try {
      await user.save()
    } catch (e) {
      return response.badRequest({
        result: e,
        code: 500,
        message: 'Insert fail',
      })
    }

    Event.emit('user:send_mail', user.email)

    return user
  }
}
