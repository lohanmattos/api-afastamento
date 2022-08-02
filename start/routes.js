'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')
const AfastamentoController = require('../app/Controllers/Http/AfastamentoController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/afastamentos',"AfastamentoController.list")
Route.get('/afastamentos/:id', 'AfastamentoController.show')
Route.post('/afastamentos/criar', 'AfastamentoController.store')
Route.put('/afastamentos/editar/:id', 'AfastamentoController.update')
Route.delete('/afastamentos/:id', 'AfastamentoController.delete')

Route.get('/afastamentos/filtro/:data/:dataFim', 'AfastamentoController.filtarPorData')