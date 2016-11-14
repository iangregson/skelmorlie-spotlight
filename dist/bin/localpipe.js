'use strict';

var _createServer = require('../lib/createServer');

var _createServer2 = _interopRequireDefault(_createServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 5000;

(0, _createServer2.default)({ port: PORT }).then(function () {
  return console.log('Server started on port ', PORT);
}).catch(function (err) {
  return console.log('Something went wrong starting the server. ', err);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWNrZW5kL2Jpbi9sb2NhbHBpcGUuanMiXSwibmFtZXMiOlsiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJwb3J0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUUMsR0FBUixDQUFZRixJQUFaLElBQW9CLElBQWpDOztBQUVBLDRCQUFhLEVBQUVHLE1BQU1ILElBQVIsRUFBYixFQUNDSSxJQURELENBQ007QUFBQSxTQUFNQyxRQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNOLElBQXZDLENBQU47QUFBQSxDQUROLEVBRUNPLEtBRkQsQ0FFTyxVQUFDQyxHQUFEO0FBQUEsU0FBU0gsUUFBUUMsR0FBUixDQUFZLDRDQUFaLEVBQTBERSxHQUExRCxDQUFUO0FBQUEsQ0FGUCIsImZpbGUiOiJsb2NhbHBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlU2VydmVyIGZyb20gJy4uL2xpYi9jcmVhdGVTZXJ2ZXInXG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDBcblxuY3JlYXRlU2VydmVyKHsgcG9ydDogUE9SVCB9KVxuLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1NlcnZlciBzdGFydGVkIG9uIHBvcnQgJywgUE9SVCkpXG4uY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nIHN0YXJ0aW5nIHRoZSBzZXJ2ZXIuICcsIGVycikpXG5cbiJdfQ==