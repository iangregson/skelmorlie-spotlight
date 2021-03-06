'use strict';

/* eslint-disable */

var pm2 = require('pm2');

var instances = process.env.WEB_CONCURRENCY || -1; // Set by Heroku or -1 to scale to max cpu core -1
var maxMemory = process.env.WEB_MEMORY || 512; // " " "

pm2.connect(function () {
  pm2.start({
    script: 'dist/bin/localpipe.js',
    name: 'skelmorlie-spotlight', // ----> THESE ATTRIBUTES ARE OPTIONAL:
    exec_mode: 'cluster', // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
    instances: instances,
    max_memory_restart: maxMemory + 'M', // Auto restart if process taking more than XXmo
    env: { // If needed declare some environment variables
      "NODE_ENV": "production"
    }
  }, function (err) {
    if (err) return console.error('Error while launching applications', err.stack || err);
    console.log('PM2 and application has been succesfully started');

    // Display logs in standard output 
    pm2.launchBus(function (err, bus) {
      console.log('[PM2] Log streaming started');

      bus.on('log:out', function (packet) {
        console.log('[App:%s] %s', packet.process.name, packet.data);
      });

      bus.on('log:err', function (packet) {
        console.error('[App:%s][Err] %s', packet.process.name, packet.data);
      });
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYWNrZW5kL2Jpbi93d3cuanMiXSwibmFtZXMiOlsicG0yIiwicmVxdWlyZSIsImluc3RhbmNlcyIsInByb2Nlc3MiLCJlbnYiLCJXRUJfQ09OQ1VSUkVOQ1kiLCJtYXhNZW1vcnkiLCJXRUJfTUVNT1JZIiwiY29ubmVjdCIsInN0YXJ0Iiwic2NyaXB0IiwibmFtZSIsImV4ZWNfbW9kZSIsIm1heF9tZW1vcnlfcmVzdGFydCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwibG9nIiwibGF1bmNoQnVzIiwiYnVzIiwib24iLCJwYWNrZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQUlBLE1BQU1DLFFBQVEsS0FBUixDQUFWOztBQUVBLElBQUlDLFlBQVlDLFFBQVFDLEdBQVIsQ0FBWUMsZUFBWixJQUErQixDQUFDLENBQWhELEMsQ0FBbUQ7QUFDbkQsSUFBSUMsWUFBWUgsUUFBUUMsR0FBUixDQUFZRyxVQUFaLElBQTBCLEdBQTFDLEMsQ0FBa0Q7O0FBRWxEUCxJQUFJUSxPQUFKLENBQVksWUFBVztBQUNyQlIsTUFBSVMsS0FBSixDQUFVO0FBQ1JDLFlBQVksdUJBREo7QUFFUkMsVUFBWSxzQkFGSixFQUVnQztBQUN4Q0MsZUFBWSxTQUhKLEVBRzBCO0FBQ2xDVixlQUFZQSxTQUpKO0FBS1JXLHdCQUFxQlAsWUFBWSxHQUx6QixFQUtnQztBQUN4Q0YsU0FBSyxFQUE2QjtBQUNoQyxrQkFBWTtBQURUO0FBTkcsR0FBVixFQVNHLFVBQVNVLEdBQVQsRUFBYztBQUNmLFFBQUlBLEdBQUosRUFBUyxPQUFPQyxRQUFRQyxLQUFSLENBQWMsb0NBQWQsRUFBb0RGLElBQUlHLEtBQUosSUFBYUgsR0FBakUsQ0FBUDtBQUNUQyxZQUFRRyxHQUFSLENBQVksa0RBQVo7O0FBRUE7QUFDQWxCLFFBQUltQixTQUFKLENBQWMsVUFBU0wsR0FBVCxFQUFjTSxHQUFkLEVBQW1CO0FBQy9CTCxjQUFRRyxHQUFSLENBQVksNkJBQVo7O0FBRUFFLFVBQUlDLEVBQUosQ0FBTyxTQUFQLEVBQWtCLFVBQVNDLE1BQVQsRUFBaUI7QUFDbENQLGdCQUFRRyxHQUFSLENBQVksYUFBWixFQUEyQkksT0FBT25CLE9BQVAsQ0FBZVEsSUFBMUMsRUFBZ0RXLE9BQU9DLElBQXZEO0FBQ0EsT0FGRDs7QUFJQUgsVUFBSUMsRUFBSixDQUFPLFNBQVAsRUFBa0IsVUFBU0MsTUFBVCxFQUFpQjtBQUNqQ1AsZ0JBQVFDLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQ00sT0FBT25CLE9BQVAsQ0FBZVEsSUFBakQsRUFBdURXLE9BQU9DLElBQTlEO0FBQ0QsT0FGRDtBQUdELEtBVkQ7QUFZRCxHQTFCRDtBQTJCRCxDQTVCRCIsImZpbGUiOiJ3d3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG52YXIgcG0yID0gcmVxdWlyZSgncG0yJyk7XG5cbnZhciBpbnN0YW5jZXMgPSBwcm9jZXNzLmVudi5XRUJfQ09OQ1VSUkVOQ1kgfHwgLTE7IC8vIFNldCBieSBIZXJva3Ugb3IgLTEgdG8gc2NhbGUgdG8gbWF4IGNwdSBjb3JlIC0xXG52YXIgbWF4TWVtb3J5ID0gcHJvY2Vzcy5lbnYuV0VCX01FTU9SWSB8fCA1MTI7ICAgIC8vIFwiIFwiIFwiXG5cbnBtMi5jb25uZWN0KGZ1bmN0aW9uKCkge1xuICBwbTIuc3RhcnQoe1xuICAgIHNjcmlwdCAgICA6ICdkaXN0L2Jpbi9sb2NhbHBpcGUuanMnLFxuICAgIG5hbWUgICAgICA6ICdza2VsbW9ybGllLXNwb3RsaWdodCcsICAgICAvLyAtLS0tPiBUSEVTRSBBVFRSSUJVVEVTIEFSRSBPUFRJT05BTDpcbiAgICBleGVjX21vZGUgOiAnY2x1c3RlcicsICAgICAgICAgICAgLy8gLS0tLT4gaHR0cHM6Ly9naXRodWIuY29tL1VuaXRlY2gvUE0yL2Jsb2IvbWFzdGVyL0FEVkFOQ0VEX1JFQURNRS5tZCNzY2hlbWFcbiAgICBpbnN0YW5jZXMgOiBpbnN0YW5jZXMsXG4gICAgbWF4X21lbW9yeV9yZXN0YXJ0IDogbWF4TWVtb3J5ICsgJ00nLCAgIC8vIEF1dG8gcmVzdGFydCBpZiBwcm9jZXNzIHRha2luZyBtb3JlIHRoYW4gWFhtb1xuICAgIGVudjogeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBuZWVkZWQgZGVjbGFyZSBzb21lIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgICAgXCJOT0RFX0VOVlwiOiBcInByb2R1Y3Rpb25cIlxuICAgIH0sXG4gIH0sIGZ1bmN0aW9uKGVycikge1xuICAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBsYXVuY2hpbmcgYXBwbGljYXRpb25zJywgZXJyLnN0YWNrIHx8IGVycik7XG4gICAgY29uc29sZS5sb2coJ1BNMiBhbmQgYXBwbGljYXRpb24gaGFzIGJlZW4gc3VjY2VzZnVsbHkgc3RhcnRlZCcpO1xuICAgIFxuICAgIC8vIERpc3BsYXkgbG9ncyBpbiBzdGFuZGFyZCBvdXRwdXQgXG4gICAgcG0yLmxhdW5jaEJ1cyhmdW5jdGlvbihlcnIsIGJ1cykge1xuICAgICAgY29uc29sZS5sb2coJ1tQTTJdIExvZyBzdHJlYW1pbmcgc3RhcnRlZCcpO1xuXG4gICAgICBidXMub24oJ2xvZzpvdXQnLCBmdW5jdGlvbihwYWNrZXQpIHtcbiAgICAgICBjb25zb2xlLmxvZygnW0FwcDolc10gJXMnLCBwYWNrZXQucHJvY2Vzcy5uYW1lLCBwYWNrZXQuZGF0YSk7XG4gICAgICB9KTtcbiAgICAgICAgXG4gICAgICBidXMub24oJ2xvZzplcnInLCBmdW5jdGlvbihwYWNrZXQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW0FwcDolc11bRXJyXSAlcycsIHBhY2tldC5wcm9jZXNzLm5hbWUsIHBhY2tldC5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICAgXG4gIH0pO1xufSk7Il19