'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = getArticles;
exports.addArticle = addArticle;
exports.default = articleApi;
var articles = [];
var __id = 1;

function getArticles(ctx) {
  ctx.ok(articles);
}

function addArticle(ctx) {
  // format post nicely

  if (!ctx.request.body) {
    ctx.badRequest('Request did not contain a body');
    return;
  }

  var obj = {
    msg: ctx.request.body.msg,
    ts: ctx.request.body.ts || Date.now(),
    lvl: ctx.request.body.lvl || 'info',
    id: __id++,
    data: ctx.request.body.data
  };

  articles.unshift(obj);
  ctx.status = 201;
  ctx.io.emit('newArticle', obj);
}

// Set up routes

function articleApi(router) {
  router.get('/api/articles', getArticles).post('/api/articles', addArticle);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWNrZW5kL2FwaS9hcnRpY2xlcy5qcyJdLCJuYW1lcyI6WyJnZXRBcnRpY2xlcyIsImFkZEFydGljbGUiLCJhcnRpY2xlQXBpIiwiYXJ0aWNsZXMiLCJfX2lkIiwiY3R4Iiwib2siLCJyZXF1ZXN0IiwiYm9keSIsImJhZFJlcXVlc3QiLCJvYmoiLCJtc2ciLCJ0cyIsIkRhdGUiLCJub3ciLCJsdmwiLCJpZCIsImRhdGEiLCJ1bnNoaWZ0Iiwic3RhdHVzIiwiaW8iLCJlbWl0Iiwicm91dGVyIiwiZ2V0IiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLFcsR0FBQUEsVztRQUlBQyxVLEdBQUFBLFU7a0JBdUJRQyxVO0FBOUJ4QixJQUFNQyxXQUFXLEVBQWpCO0FBQ0EsSUFBSUMsT0FBTyxDQUFYOztBQUVPLFNBQVNKLFdBQVQsQ0FBcUJLLEdBQXJCLEVBQTBCO0FBQy9CQSxNQUFJQyxFQUFKLENBQU9ILFFBQVA7QUFDRDs7QUFFTSxTQUFTRixVQUFULENBQW9CSSxHQUFwQixFQUF5QjtBQUM5Qjs7QUFFQSxNQUFJLENBQUNBLElBQUlFLE9BQUosQ0FBWUMsSUFBakIsRUFBdUI7QUFDckJILFFBQUlJLFVBQUosQ0FBZSxnQ0FBZjtBQUNBO0FBQ0Q7O0FBRUQsTUFBTUMsTUFBTTtBQUNWQyxTQUFLTixJQUFJRSxPQUFKLENBQVlDLElBQVosQ0FBaUJHLEdBRFo7QUFFVkMsUUFBSVAsSUFBSUUsT0FBSixDQUFZQyxJQUFaLENBQWlCSSxFQUFqQixJQUF1QkMsS0FBS0MsR0FBTCxFQUZqQjtBQUdWQyxTQUFLVixJQUFJRSxPQUFKLENBQVlDLElBQVosQ0FBaUJPLEdBQWpCLElBQXdCLE1BSG5CO0FBSVZDLFFBQUlaLE1BSk07QUFLVmEsVUFBTVosSUFBSUUsT0FBSixDQUFZQyxJQUFaLENBQWlCUztBQUxiLEdBQVo7O0FBUUFkLFdBQVNlLE9BQVQsQ0FBaUJSLEdBQWpCO0FBQ0FMLE1BQUljLE1BQUosR0FBYSxHQUFiO0FBQ0FkLE1BQUllLEVBQUosQ0FBT0MsSUFBUCxDQUFZLFlBQVosRUFBMEJYLEdBQTFCO0FBQ0Q7O0FBRUQ7O0FBRWUsU0FBU1IsVUFBVCxDQUFvQm9CLE1BQXBCLEVBQTRCO0FBQ3pDQSxTQUNDQyxHQURELENBQ0ssZUFETCxFQUNzQnZCLFdBRHRCLEVBRUN3QixJQUZELENBRU0sZUFGTixFQUV1QnZCLFVBRnZCO0FBR0QiLCJmaWxlIjoiYXJ0aWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcnRpY2xlcyA9IFtdXG5sZXQgX19pZCA9IDFcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFydGljbGVzKGN0eCkge1xuICBjdHgub2soYXJ0aWNsZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBcnRpY2xlKGN0eCkge1xuICAvLyBmb3JtYXQgcG9zdCBuaWNlbHlcblxuICBpZiAoIWN0eC5yZXF1ZXN0LmJvZHkpIHtcbiAgICBjdHguYmFkUmVxdWVzdCgnUmVxdWVzdCBkaWQgbm90IGNvbnRhaW4gYSBib2R5JylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IG9iaiA9IHtcbiAgICBtc2c6IGN0eC5yZXF1ZXN0LmJvZHkubXNnLFxuICAgIHRzOiBjdHgucmVxdWVzdC5ib2R5LnRzIHx8IERhdGUubm93KCksXG4gICAgbHZsOiBjdHgucmVxdWVzdC5ib2R5Lmx2bCB8fCAnaW5mbycsXG4gICAgaWQ6IF9faWQrKyxcbiAgICBkYXRhOiBjdHgucmVxdWVzdC5ib2R5LmRhdGFcbiAgfVxuXG4gIGFydGljbGVzLnVuc2hpZnQob2JqKVxuICBjdHguc3RhdHVzID0gMjAxO1xuICBjdHguaW8uZW1pdCgnbmV3QXJ0aWNsZScsIG9iailcbn1cblxuLy8gU2V0IHVwIHJvdXRlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnRpY2xlQXBpKHJvdXRlcikge1xuICByb3V0ZXJcbiAgLmdldCgnL2FwaS9hcnRpY2xlcycsIGdldEFydGljbGVzKVxuICAucG9zdCgnL2FwaS9hcnRpY2xlcycsIGFkZEFydGljbGUpXG59XG4iXX0=