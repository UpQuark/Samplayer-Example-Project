import { Router as IndexRoute } from 'express';

/* GET health-check index route. */
IndexRoute.get('/', function ( req, res, next ) {
  res.render('index', { title: 'Index' });
});

export default IndexRoute;
