'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * HTTP 200 with the given content.
 *
 * @param  {Any} content The content to put in `body`.
 */
function ok(content) {
  this.status = 200;
  this.body = content;
}

/**
 * Sets the status to the given code and returns a JSON
 * body with the given message. Used by other calls.
 *
 * @param  {String} message
 * The message to return.
 *
 * @param  {Number} code
 * The HTTP status code.
 */
function error(message) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  this.status = code;
  this.body = {
    message: message
  };
}

/**
 * Calls `error` with the given message and a 400 status code.
 *
 * @param  {String} message
 * The message.
 */
function badRequest(message) {
  this.error(message, 400);
}

/**
 * Calls `error` with a predefined message and a 401 status code.
 */
function unauthorized() {
  this.error('You are not authorized.', 401);
}

/**
 * Calls `error` with a predefined message and a 403 status code.
 */
function forbidden() {
  this.error('You are not allowed to do that.', 403);
}

/**
 * Calls `error` with the given message and a 404 status code.
 *
 * @param  {String} message
 * The message.
 */
function notFound(message) {
  this.error(message, 404);
}

/**
 * Adds some nice response calls to our context.
 *
 * @param {Koa.context} ctx
 * The Koa context.
 *
 * @param {Function} next
 * The middleware to call next.
 */

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.ok = ok.bind(ctx);
            ctx.error = error.bind(ctx);
            ctx.badRequest = badRequest.bind(ctx);
            ctx.unauthorized = unauthorized.bind(ctx);
            ctx.forbidden = forbidden.bind(ctx);
            ctx.notFound = notFound.bind(ctx);
            _context.next = 8;
            return next();

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function responseCalls(_x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return responseCalls;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWNrZW5kL21pZGRsZXdhcmUvcmVzcG9uc2VDYWxscy5qcyJdLCJuYW1lcyI6WyJvayIsImNvbnRlbnQiLCJzdGF0dXMiLCJib2R5IiwiZXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsImJhZFJlcXVlc3QiLCJ1bmF1dGhvcml6ZWQiLCJmb3JiaWRkZW4iLCJub3RGb3VuZCIsImN0eCIsIm5leHQiLCJiaW5kIiwicmVzcG9uc2VDYWxscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBLFNBQVNBLEVBQVQsQ0FBWUMsT0FBWixFQUFxQjtBQUNuQixPQUFLQyxNQUFMLEdBQWMsR0FBZDtBQUNBLE9BQUtDLElBQUwsR0FBWUYsT0FBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7O0FBVUEsU0FBU0csS0FBVCxDQUFlQyxPQUFmLEVBQW9DO0FBQUEsTUFBWkMsSUFBWSx1RUFBTCxHQUFLOztBQUNsQyxPQUFLSixNQUFMLEdBQWNJLElBQWQ7QUFDQSxPQUFLSCxJQUFMLEdBQVk7QUFDVkU7QUFEVSxHQUFaO0FBR0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNFLFVBQVQsQ0FBb0JGLE9BQXBCLEVBQTZCO0FBQzNCLE9BQUtELEtBQUwsQ0FBV0MsT0FBWCxFQUFvQixHQUFwQjtBQUNEOztBQUVEOzs7QUFHQSxTQUFTRyxZQUFULEdBQXdCO0FBQ3RCLE9BQUtKLEtBQUwsQ0FBVyx5QkFBWCxFQUFzQyxHQUF0QztBQUNEOztBQUVEOzs7QUFHQSxTQUFTSyxTQUFULEdBQXFCO0FBQ25CLE9BQUtMLEtBQUwsQ0FBVyxpQ0FBWCxFQUE4QyxHQUE5QztBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTTSxRQUFULENBQWtCTCxPQUFsQixFQUEyQjtBQUN6QixPQUFLRCxLQUFMLENBQVdDLE9BQVgsRUFBb0IsR0FBcEI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7d0VBU2UsaUJBQTZCTSxHQUE3QixFQUFrQ0MsSUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiRCxnQkFBSVgsRUFBSixHQUFTQSxHQUFHYSxJQUFILENBQVFGLEdBQVIsQ0FBVDtBQUNBQSxnQkFBSVAsS0FBSixHQUFZQSxNQUFNUyxJQUFOLENBQVdGLEdBQVgsQ0FBWjtBQUNBQSxnQkFBSUosVUFBSixHQUFpQkEsV0FBV00sSUFBWCxDQUFnQkYsR0FBaEIsQ0FBakI7QUFDQUEsZ0JBQUlILFlBQUosR0FBbUJBLGFBQWFLLElBQWIsQ0FBa0JGLEdBQWxCLENBQW5CO0FBQ0FBLGdCQUFJRixTQUFKLEdBQWdCQSxVQUFVSSxJQUFWLENBQWVGLEdBQWYsQ0FBaEI7QUFDQUEsZ0JBQUlELFFBQUosR0FBZUEsU0FBU0csSUFBVCxDQUFjRixHQUFkLENBQWY7QUFOYTtBQUFBLG1CQU9QQyxNQVBPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O1dBQWVFLGE7Ozs7U0FBQUEsYSIsImZpbGUiOiJyZXNwb25zZUNhbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIVFRQIDIwMCB3aXRoIHRoZSBnaXZlbiBjb250ZW50LlxuICpcbiAqIEBwYXJhbSAge0FueX0gY29udGVudCBUaGUgY29udGVudCB0byBwdXQgaW4gYGJvZHlgLlxuICovXG5mdW5jdGlvbiBvayhjb250ZW50KSB7XG4gIHRoaXMuc3RhdHVzID0gMjAwO1xuICB0aGlzLmJvZHkgPSBjb250ZW50O1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YXR1cyB0byB0aGUgZ2l2ZW4gY29kZSBhbmQgcmV0dXJucyBhIEpTT05cbiAqIGJvZHkgd2l0aCB0aGUgZ2l2ZW4gbWVzc2FnZS4gVXNlZCBieSBvdGhlciBjYWxscy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG1lc3NhZ2VcbiAqIFRoZSBtZXNzYWdlIHRvIHJldHVybi5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGNvZGVcbiAqIFRoZSBIVFRQIHN0YXR1cyBjb2RlLlxuICovXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlLCBjb2RlID0gNTAwKSB7XG4gIHRoaXMuc3RhdHVzID0gY29kZTtcbiAgdGhpcy5ib2R5ID0ge1xuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuLyoqXG4gKiBDYWxscyBgZXJyb3JgIHdpdGggdGhlIGdpdmVuIG1lc3NhZ2UgYW5kIGEgNDAwIHN0YXR1cyBjb2RlLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICogVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGJhZFJlcXVlc3QobWVzc2FnZSkge1xuICB0aGlzLmVycm9yKG1lc3NhZ2UsIDQwMCk7XG59XG5cbi8qKlxuICogQ2FsbHMgYGVycm9yYCB3aXRoIGEgcHJlZGVmaW5lZCBtZXNzYWdlIGFuZCBhIDQwMSBzdGF0dXMgY29kZS5cbiAqL1xuZnVuY3Rpb24gdW5hdXRob3JpemVkKCkge1xuICB0aGlzLmVycm9yKCdZb3UgYXJlIG5vdCBhdXRob3JpemVkLicsIDQwMSk7XG59XG5cbi8qKlxuICogQ2FsbHMgYGVycm9yYCB3aXRoIGEgcHJlZGVmaW5lZCBtZXNzYWdlIGFuZCBhIDQwMyBzdGF0dXMgY29kZS5cbiAqL1xuZnVuY3Rpb24gZm9yYmlkZGVuKCkge1xuICB0aGlzLmVycm9yKCdZb3UgYXJlIG5vdCBhbGxvd2VkIHRvIGRvIHRoYXQuJywgNDAzKTtcbn1cblxuLyoqXG4gKiBDYWxscyBgZXJyb3JgIHdpdGggdGhlIGdpdmVuIG1lc3NhZ2UgYW5kIGEgNDA0IHN0YXR1cyBjb2RlLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICogVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIG5vdEZvdW5kKG1lc3NhZ2UpIHtcbiAgdGhpcy5lcnJvcihtZXNzYWdlLCA0MDQpO1xufVxuXG4vKipcbiAqIEFkZHMgc29tZSBuaWNlIHJlc3BvbnNlIGNhbGxzIHRvIG91ciBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7S29hLmNvbnRleHR9IGN0eFxuICogVGhlIEtvYSBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRcbiAqIFRoZSBtaWRkbGV3YXJlIHRvIGNhbGwgbmV4dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVzcG9uc2VDYWxscyhjdHgsIG5leHQpIHtcbiAgY3R4Lm9rID0gb2suYmluZChjdHgpO1xuICBjdHguZXJyb3IgPSBlcnJvci5iaW5kKGN0eCk7XG4gIGN0eC5iYWRSZXF1ZXN0ID0gYmFkUmVxdWVzdC5iaW5kKGN0eCk7XG4gIGN0eC51bmF1dGhvcml6ZWQgPSB1bmF1dGhvcml6ZWQuYmluZChjdHgpO1xuICBjdHguZm9yYmlkZGVuID0gZm9yYmlkZGVuLmJpbmQoY3R4KTtcbiAgY3R4Lm5vdEZvdW5kID0gbm90Rm91bmQuYmluZChjdHgpO1xuICBhd2FpdCBuZXh0KCk7XG59XG4iXX0=