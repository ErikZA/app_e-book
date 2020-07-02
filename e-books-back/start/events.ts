import Event from '@ioc:Adonis/Core/Event'

import UserEvent from 'App/Events/User'
import AuthEvent from 'App/Events/Auth'

/*
|--------------------------------------------------------------------------
| Register Events
|--------------------------------------------------------------------------
|
| Register all events below.
|
*/
Event.on('user:send_mail', UserEvent.sendMail)

Event.on('auth:send_mail_forgot_passWord', AuthEvent.sendMailForgotPassWord)
