'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = feeds;

var _lodash = require('lodash');

var _scruffy = require('scruffy');

function feeds(io) {
  var feed = new _scruffy.Feed({ url: 'http://skelmorliespotlight.posthaven.com/posts.atom' });

  var error = function error(e) {
    throw new Error(e);
  };

  // Recursively list the top items in the feed
  var listTitles = function listTitles(n, t) {
    feed.top(n, t).subscribe(function (i) {
      i.id = (0, _lodash.uniqueId)();
      i.lvl = 'info';
      io.emit('newArticle', i);
    }, function (e) {
      return error(e);
    }, function (d) {
      return listTitles(n, t);
    });
  };

  feed.on('loading', function (data) {
    return console.log(data);
  });
  feed.on('error', error);
  feed.on('ready', function () {
    return listTitles(5, 1);
  });
  feed.init();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWNrZW5kL2FwaS9mZWVkcy5qcyJdLCJuYW1lcyI6WyJmZWVkcyIsImlvIiwiZmVlZCIsInVybCIsImVycm9yIiwiZSIsIkVycm9yIiwibGlzdFRpdGxlcyIsIm4iLCJ0IiwidG9wIiwic3Vic2NyaWJlIiwiaSIsImlkIiwibHZsIiwiZW1pdCIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFHd0JBLEs7O0FBSHhCOztBQUNBOztBQUVlLFNBQVNBLEtBQVQsQ0FBZ0JDLEVBQWhCLEVBQW9CO0FBQ2pDLE1BQU1DLE9BQU8sa0JBQVMsRUFBRUMsS0FBSyxxREFBUCxFQUFULENBQWI7O0FBRUEsTUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLENBQUQsRUFBTztBQUNuQixVQUFNLElBQUlDLEtBQUosQ0FBVUQsQ0FBVixDQUFOO0FBQ0QsR0FGRDs7QUFJQTtBQUNBLE1BQU1FLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMzQlAsU0FBS1EsR0FBTCxDQUFTRixDQUFULEVBQVlDLENBQVosRUFDQ0UsU0FERCxDQUVJLGFBQUs7QUFDSEMsUUFBRUMsRUFBRixHQUFPLHVCQUFQO0FBQ0FELFFBQUVFLEdBQUYsR0FBUSxNQUFSO0FBQ0FiLFNBQUdjLElBQUgsQ0FBUSxZQUFSLEVBQXNCSCxDQUF0QjtBQUNELEtBTkwsRUFPSTtBQUFBLGFBQUtSLE1BQU1DLENBQU4sQ0FBTDtBQUFBLEtBUEosRUFRSTtBQUFBLGFBQUtFLFdBQVdDLENBQVgsRUFBY0MsQ0FBZCxDQUFMO0FBQUEsS0FSSjtBQVVELEdBWEQ7O0FBYUFQLE9BQUtjLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLFVBQUNDLElBQUQ7QUFBQSxXQUFVQyxRQUFRQyxHQUFSLENBQVlGLElBQVosQ0FBVjtBQUFBLEdBQW5CO0FBQ0FmLE9BQUtjLEVBQUwsQ0FBUSxPQUFSLEVBQWlCWixLQUFqQjtBQUNBRixPQUFLYyxFQUFMLENBQVEsT0FBUixFQUFpQjtBQUFBLFdBQU1ULFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBTjtBQUFBLEdBQWpCO0FBQ0FMLE9BQUtrQixJQUFMO0FBQ0QiLCJmaWxlIjoiZmVlZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IEZlZWQgfSBmcm9tICdzY3J1ZmZ5J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWVkcyAoaW8pIHtcbiAgY29uc3QgZmVlZCA9IG5ldyBGZWVkKHsgdXJsOiAnaHR0cDovL3NrZWxtb3JsaWVzcG90bGlnaHQucG9zdGhhdmVuLmNvbS9wb3N0cy5hdG9tJyB9KVxuXG4gIGNvbnN0IGVycm9yID0gKGUpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSlcbiAgfVxuXG4gIC8vIFJlY3Vyc2l2ZWx5IGxpc3QgdGhlIHRvcCBpdGVtcyBpbiB0aGUgZmVlZFxuICBjb25zdCBsaXN0VGl0bGVzID0gKG4sIHQpID0+IHtcbiAgICBmZWVkLnRvcChuLCB0KVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGkgPT4ge1xuICAgICAgICAgIGkuaWQgPSB1bmlxdWVJZCgpXG4gICAgICAgICAgaS5sdmwgPSAnaW5mbydcbiAgICAgICAgICBpby5lbWl0KCduZXdBcnRpY2xlJywgaSlcbiAgICAgICAgfSxcbiAgICAgICAgZSA9PiBlcnJvcihlKSxcbiAgICAgICAgZCA9PiBsaXN0VGl0bGVzKG4sIHQpXG4gICAgKVxuICB9XG5cbiAgZmVlZC5vbignbG9hZGluZycsIChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgZmVlZC5vbignZXJyb3InLCBlcnJvcilcbiAgZmVlZC5vbigncmVhZHknLCAoKSA9PiBsaXN0VGl0bGVzKDUsIDEpKVxuICBmZWVkLmluaXQoKVxufVxuIl19