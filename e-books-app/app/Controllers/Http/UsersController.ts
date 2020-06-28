import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async login ({ request, auth }: HttpContextContract) {
    const email = request.only(['email'])
    const password = request.only(['password'])
    const token = await auth.use('api').attempt(email.email, password.password)
    return token.toJSON()
  }

  public async store ({ request }: HttpContextContract) {
    const data = request.only(['email', 'password', 'rememberMeToken'])
    const user = User.create(data)
    return user
  }
}
