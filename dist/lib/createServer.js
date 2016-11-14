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
              app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_path2.default.join(__dirname, '../public'))));
              app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_path2.default.join(__dirname, '../public/static/js'))));
              app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_path2.default.join(__dirname, '../public/static/css'))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWNrZW5kL2xpYi9jcmVhdGVTZXJ2ZXIuanMiXSwibmFtZXMiOlsib3B0cyIsImFwcCIsInJvdXRlciIsInNlcnZlciIsImlvIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidXNlIiwiam9pbiIsIl9fZGlybmFtZSIsImN0eCIsIm5leHQiLCJhbGxvd2VkTWV0aG9kcyIsInJvdXRlcyIsIm1ldGhvZCIsImJvZHkiLCJjcmVhdGVTZXJ2ZXIiLCJjYWxsYmFjayIsImxpc3RlbiIsInBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7O3dFQUVlLGlCQUE0QkEsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BDLGVBRE8sR0FDRCxtQkFEQztBQUVQQyxrQkFGTyxHQUVFLHlCQUZGO0FBR1RDLGtCQUhTLFdBR0RDLEVBSEM7OztBQUtiLGdCQUFJQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekNOLGtCQUFJTyxHQUFKLENBQVEsMEJBQVEseUJBQU0sZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFdBQXJCLENBQU4sQ0FBUixDQUFSO0FBQ0FULGtCQUFJTyxHQUFKLENBQVEsMEJBQVEseUJBQU0sZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLHFCQUFyQixDQUFOLENBQVIsQ0FBUjtBQUNBVCxrQkFBSU8sR0FBSixDQUFRLDBCQUFRLHlCQUFNLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixzQkFBckIsQ0FBTixDQUFSLENBQVI7QUFDQVQsa0JBQUlPLEdBQUosQ0FBUSx1QkFBUjtBQUNEOztBQUVEUCxnQkFBSU8sR0FBSixDQUFRLDBCQUFRLDhCQUFSLENBQVI7QUFDQVAsZ0JBQUlPLEdBQUo7O0FBRUE7QUFDQVAsZ0JBQUlPLEdBQUosQ0FDRSxVQUFDRyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNiRCxrQkFBSVAsRUFBSixHQUFTQSxFQUFUO0FBQ0EscUJBQU9RLE1BQVA7QUFDRCxhQUpIOztBQU9BO0FBQ0Esb0NBQVdWLE1BQVg7O0FBRUE7QUFDQUQsZ0JBQUlPLEdBQUosQ0FBUU4sT0FBT1csY0FBUCxFQUFSO0FBQ0FaLGdCQUFJTyxHQUFKLENBQVFOLE9BQU9ZLE1BQVAsRUFBUjs7QUFFQTtBQUNBYixnQkFBSU8sR0FBSixDQUNFLGVBQU87QUFDTCxrQkFBSUcsSUFBSUksTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCSixvQkFBSUssSUFBSixHQUFXLGdEQUFYO0FBQ0E7QUFDRDtBQUNGLGFBTkg7O0FBU0E7QUFDQWIscUJBQVMsZUFBS2MsWUFBTCxDQUFrQmhCLElBQUlpQixRQUFKLEVBQWxCLENBQVQ7QUFDQWQsaUJBQUtELE9BQU9DLEVBQVAsR0FBWSxzQkFBR0QsTUFBSCxDQUFqQjs7QUFFQTtBQUNBLGlDQUFNQyxFQUFOOztBQUVBO0FBQ0FELG1CQUFPZ0IsTUFBUCxDQUFjbkIsS0FBS29CLElBQW5COztBQWhEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlSCxZOzs7O1NBQUFBLFkiLCJmaWxlIjoiY3JlYXRlU2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBLb2EgZnJvbSAna29hJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAna29hLWJvZHlwYXJzZXInXG5pbXBvcnQgY29udmVydCBmcm9tICdrb2EtY29udmVydCdcbmltcG9ydCBzZXJ2ZSBmcm9tICdrb2Etc3RhdGljJ1xuaW1wb3J0IEtvYVJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xuaW1wb3J0IEtvYUhlbG1ldCBmcm9tICdoZWxtZXQnXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xuaW1wb3J0IElPIGZyb20gJ3NvY2tldC5pbydcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgZmVlZHMgZnJvbSAnLi4vYXBpL2ZlZWRzJztcbmltcG9ydCBhcnRpY2xlQXBpIGZyb20gJy4uL2FwaS9hcnRpY2xlcydcbmltcG9ydCByZXNwb25zZUNhbGxzIGZyb20gJy4uL21pZGRsZXdhcmUvcmVzcG9uc2VDYWxscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2VydmVyKG9wdHMpIHtcbiAgY29uc3QgYXBwID0gbmV3IEtvYSgpXG4gIGNvbnN0IHJvdXRlciA9IG5ldyBLb2FSb3V0ZXIoKVxuICBsZXQgc2VydmVyLCBpb1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXBwLnVzZShjb252ZXJ0KHNlcnZlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMnKSkpKVxuICAgIGFwcC51c2UoY29udmVydChzZXJ2ZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL3N0YXRpYy9qcycpKSkpXG4gICAgYXBwLnVzZShjb252ZXJ0KHNlcnZlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvc3RhdGljL2NzcycpKSkpXG4gICAgYXBwLnVzZShLb2FIZWxtZXQoKSlcbiAgfVxuXG4gIGFwcC51c2UoY29udmVydChib2R5UGFyc2VyKCkpKVxuICBhcHAudXNlKHJlc3BvbnNlQ2FsbHMpXG5cbiAgLy8gR2V0IG91ciBzb2NrZXQgaW8gb2JqZWN0IG9udG8gdGhlIGNvbnRleHRcbiAgYXBwLnVzZShcbiAgICAoY3R4LCBuZXh0KSA9PiB7XG4gICAgICBjdHguaW8gPSBpb1xuICAgICAgcmV0dXJuIG5leHQoKVxuICAgIH1cbiAgKVxuXG4gIC8vIGNyZWF0ZSBhcnRpY2xlIGFwaVxuICBhcnRpY2xlQXBpKHJvdXRlcilcblxuICAvLyBzZXR1cCByb3V0ZXJcbiAgYXBwLnVzZShyb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSlcbiAgYXBwLnVzZShyb3V0ZXIucm91dGVzKCkpXG5cbiAgLy8gTGFzdCBtaWRkbGV3YXJlIHJldHVybnMgaW5kZXguaHRtbCBpZiBHRVRcbiAgYXBwLnVzZShcbiAgICBjdHggPT4ge1xuICAgICAgaWYgKGN0eC5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIGN0eC5ib2R5ID0gJ1dlbGNvbWUgdG8gdGhlIFNrZWxtb3JsaWUgU3BvdGxpZ2h0IGFwaSBzZXJ2ZXInO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIClcblxuICAvLyBjcmVhdGUgdGhlIHNlcnZlclxuICBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHAuY2FsbGJhY2soKSlcbiAgaW8gPSBzZXJ2ZXIuaW8gPSBJTyhzZXJ2ZXIpXG5cbiAgLy8gY3JlYXRlIGZlZWQgY29uc3VtZXJcbiAgZmVlZHMoaW8pXG5cbiAgLy8gbGlzdGVuIHVwXG4gIHNlcnZlci5saXN0ZW4ob3B0cy5wb3J0KVxufVxuIl19