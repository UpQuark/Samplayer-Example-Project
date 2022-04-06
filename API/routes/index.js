import { Router as IndexRoute } from 'express';

/* GET home page. */
IndexRoute.get('/', function ( req, res, next ) {
  res.render('index', { title: 'Index' });
});

export default IndexRoute;
