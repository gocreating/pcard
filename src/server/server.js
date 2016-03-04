process.env.NODE_ENV = process.env.NODE_ENV || 'production';

import express from 'express';
import mongoose from 'mongoose';
import mongolab from './credentials/mongolab';
import middlewares from './middlewares';
import routes from './routes';

// connect to mongolab
mongoose.connect(mongolab, (err) => {
  if (err) {
    throw err;
  }

  const app = express();
  app.set('env', process.env.NODE_ENV);
  if (app.get('env') === 'development') {
    require('source-map-support').install();
  }
  middlewares({ app });
  routes({ app });

  // launch server
  app.listen(process.env.PORT || process.argv[2] || 3000, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Listening at port 3000');
  });
});