const { init } = require('./server/server.js');

const port = process.env.PORT || 3000;

init().then(app => {
  app.listen(port, () => {
    console.log('Application is started on localhost:', port);
  });
});
