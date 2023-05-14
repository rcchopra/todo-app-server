/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      //   'cookieParser',
      //   'session',
      'bodyParser',
      //   'compress',
      //   'poweredBy',
      //   'router',
      //   'www',
      //   'favicon',
      'cors'
    ],


    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    bodyParser: (function _configureBodyParser() {
      var skipper = require('skipper');
      var middlewareFn = skipper({ strict: true });
      return middlewareFn;
    })(),

    cors: function (req, res, next) {
      res.set('Access-Control-Allow-Origin', 'https://todo-app-rc.netlify.app');
      res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

      // Allow preflight requests
      if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }

      return next();
    },

  },

};
