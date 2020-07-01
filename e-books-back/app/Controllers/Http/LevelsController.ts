import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Level from 'App/Models/Level'

export default class LevelsController {
  public async index ({}) {
    const levels = await Level.all()
    return levels
  }

  public async show ({ params }: HttpContextContract) {
    const { id } = params.id
    const levels = await Level.findByOrFail('id', id)
    return levels
  }
}
