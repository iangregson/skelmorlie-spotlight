'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _lodash = require('lodash');

var _feeds = require('../api/feeds');

var _feeds2 = _interopRequireDefault(_feeds);

var _articles = require('../api/articles');

var _articles2 = _interopRequireDefault(_articles);

var _responseCalls = require('../middleware/responseCalls');

var _responseCalls2 = _interopRequireDefault(_responseCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(opts) {
    var app, router, server, io;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = new _koa2.default();
            router = new _koaRouter2.default();
            server = void 0, io = void 0;


            if (process.env.NODE_ENV === 'production') {
              app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_path2.default.join(__dirname, '../public/**'))));
              app.use((0, _helmet2.default)());
            }

            app.use((0, _koaConvert2.default)((0, _koaBodyparser2.default)()));
            app.use(_responseCalls2.default);

            // Get our socket io object onto the context
            app.use(function (ctx, next) {
              ctx.io = io;
              return next();
            });

            // create article api
            (0, _articles2.default)(router);

            // setup router
            app.use(router.allowedMethods());
            app.use(router.routes());

            // Last middleware returns index.html if GET
            app.use(function (ctx) {
              if (ctx.method === 'GET') {
                ctx.body = 'Welcome to the Skelmorlie Spotlight api server';
                return;
              }
            });

            // create the server
            server = _http2.default.createServer(app.callback());
            io = server.io = (0, _socket2.default)(server);

            // create feed consumer
            (0, _feeds2.default)(io);

            // listen up
            server.listen(opts.port);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function createServer(_x) {
    return _ref.apply(this, arguments);
  }

  return createServer;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWNrZW5kL2xpYi9jcmVhdGVTZXJ2ZXIuanMiXSwibmFtZXMiOlsib3B0cyIsImFwcCIsInJvdXRlciIsInNlcnZlciIsImlvIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidXNlIiwiam9pbiIsIl9fZGlybmFtZSIsImN0eCIsIm5leHQiLCJhbGxvd2VkTWV0aG9kcyIsInJvdXRlcyIsIm1ldGhvZCIsImJvZHkiLCJjcmVhdGVTZXJ2ZXIiLCJjYWxsYmFjayIsImxpc3RlbiIsInBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7O3dFQUVlLGlCQUE0QkEsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BDLGVBRE8sR0FDRCxtQkFEQztBQUVQQyxrQkFGTyxHQUVFLHlCQUZGO0FBR1RDLGtCQUhTLFdBR0RDLEVBSEM7OztBQUtiLGdCQUFJQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekNOLGtCQUFJTyxHQUFKLENBQVEsMEJBQVEseUJBQU0sZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLElBQXJCLENBQU4sQ0FBUixDQUFSO0FBQ0FULGtCQUFJTyxHQUFKLENBQVEsdUJBQVI7QUFDRDs7QUFFRFAsZ0JBQUlPLEdBQUosQ0FBUSwwQkFBUSw4QkFBUixDQUFSO0FBQ0FQLGdCQUFJTyxHQUFKOztBQUVBO0FBQ0FQLGdCQUFJTyxHQUFKLENBQ0UsVUFBQ0csR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDYkQsa0JBQUlQLEVBQUosR0FBU0EsRUFBVDtBQUNBLHFCQUFPUSxNQUFQO0FBQ0QsYUFKSDs7QUFPQTtBQUNBLG9DQUFXVixNQUFYOztBQUVBO0FBQ0FELGdCQUFJTyxHQUFKLENBQVFOLE9BQU9XLGNBQVAsRUFBUjtBQUNBWixnQkFBSU8sR0FBSixDQUFRTixPQUFPWSxNQUFQLEVBQVI7O0FBRUE7QUFDQWIsZ0JBQUlPLEdBQUosQ0FDRSxlQUFPO0FBQ0wsa0JBQUlHLElBQUlJLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4Qkosb0JBQUlLLElBQUosR0FBVyxnREFBWDtBQUNBO0FBQ0Q7QUFDRixhQU5IOztBQVNBO0FBQ0FiLHFCQUFTLGVBQUtjLFlBQUwsQ0FBa0JoQixJQUFJaUIsUUFBSixFQUFsQixDQUFUO0FBQ0FkLGlCQUFLRCxPQUFPQyxFQUFQLEdBQVksc0JBQUdELE1BQUgsQ0FBakI7O0FBRUE7QUFDQSxpQ0FBTUMsRUFBTjs7QUFFQTtBQUNBRCxtQkFBT2dCLE1BQVAsQ0FBY25CLEtBQUtvQixJQUFuQjs7QUE5Q2E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7V0FBZUgsWTs7OztTQUFBQSxZIiwiZmlsZSI6ImNyZWF0ZVNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgS29hIGZyb20gJ2tvYSdcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2tvYS1ib2R5cGFyc2VyJ1xuaW1wb3J0IGNvbnZlcnQgZnJvbSAna29hLWNvbnZlcnQnXG5pbXBvcnQgc2VydmUgZnJvbSAna29hLXN0YXRpYydcbmltcG9ydCBLb2FSb3V0ZXIgZnJvbSAna29hLXJvdXRlcidcbmltcG9ydCBLb2FIZWxtZXQgZnJvbSAnaGVsbWV0J1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcbmltcG9ydCBJTyBmcm9tICdzb2NrZXQuaW8nXG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGZlZWRzIGZyb20gJy4uL2FwaS9mZWVkcyc7XG5pbXBvcnQgYXJ0aWNsZUFwaSBmcm9tICcuLi9hcGkvYXJ0aWNsZXMnXG5pbXBvcnQgcmVzcG9uc2VDYWxscyBmcm9tICcuLi9taWRkbGV3YXJlL3Jlc3BvbnNlQ2FsbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNlcnZlcihvcHRzKSB7XG4gIGNvbnN0IGFwcCA9IG5ldyBLb2EoKVxuICBjb25zdCByb3V0ZXIgPSBuZXcgS29hUm91dGVyKClcbiAgbGV0IHNlcnZlciwgaW9cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFwcC51c2UoY29udmVydChzZXJ2ZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nKSkpKVxuICAgIGFwcC51c2UoS29hSGVsbWV0KCkpXG4gIH1cblxuICBhcHAudXNlKGNvbnZlcnQoYm9keVBhcnNlcigpKSlcbiAgYXBwLnVzZShyZXNwb25zZUNhbGxzKVxuXG4gIC8vIEdldCBvdXIgc29ja2V0IGlvIG9iamVjdCBvbnRvIHRoZSBjb250ZXh0XG4gIGFwcC51c2UoXG4gICAgKGN0eCwgbmV4dCkgPT4ge1xuICAgICAgY3R4LmlvID0gaW9cbiAgICAgIHJldHVybiBuZXh0KClcbiAgICB9XG4gIClcblxuICAvLyBjcmVhdGUgYXJ0aWNsZSBhcGlcbiAgYXJ0aWNsZUFwaShyb3V0ZXIpXG5cbiAgLy8gc2V0dXAgcm91dGVyXG4gIGFwcC51c2Uocm91dGVyLmFsbG93ZWRNZXRob2RzKCkpXG4gIGFwcC51c2Uocm91dGVyLnJvdXRlcygpKVxuXG4gIC8vIExhc3QgbWlkZGxld2FyZSByZXR1cm5zIGluZGV4Lmh0bWwgaWYgR0VUXG4gIGFwcC51c2UoXG4gICAgY3R4ID0+IHtcbiAgICAgIGlmIChjdHgubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICBjdHguYm9keSA9ICdXZWxjb21lIHRvIHRoZSBTa2VsbW9ybGllIFNwb3RsaWdodCBhcGkgc2VydmVyJztcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgLy8gY3JlYXRlIHRoZSBzZXJ2ZXJcbiAgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwLmNhbGxiYWNrKCkpXG4gIGlvID0gc2VydmVyLmlvID0gSU8oc2VydmVyKVxuXG4gIC8vIGNyZWF0ZSBmZWVkIGNvbnN1bWVyXG4gIGZlZWRzKGlvKVxuXG4gIC8vIGxpc3RlbiB1cFxuICBzZXJ2ZXIubGlzdGVuKG9wdHMucG9ydClcbn1cbiJdfQ==