/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/users', 'UsersController.store')

Route.post('/forgot_password', 'AuthController.forgotPassword')
Route.post('/auth', 'AuthController.auth')
Route.post('/reset_password', 'AuthController.resetPassword')

Route.get('/uploads/:image', async ({ response, params }) => {
  const filePath = Application.publicPath('uploads')
  const fileName = params.image

  response.download(`${filePath}/${fileName}`)
})
