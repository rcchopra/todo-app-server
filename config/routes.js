/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /todos': { action: 'todo/find' },
  'POST /todos/filter': { action: 'todo/findMany' },
  'GET /todos/:id': { action: 'todo/findOne' },
  'POST /todos': { action: 'todo/create' },
  'PUT /todos/:id': { action: 'todo/update' },
  'DELETE /todos/:id': { action: 'todo/delete' },


  'GET /boards': { action: 'board/find' },
  'GET /boards/:id': { action: 'board/findOne' },
  'POST /boards': { action: 'board/create' },
  'PUT /boards/:id': { action: 'board/update' },
  'DELETE /boards/:id': { action: 'board/delete' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
