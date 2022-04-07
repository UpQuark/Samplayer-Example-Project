import { Router as expressRouter } from 'express';

const indexRoute = expressRouter()

/* GET home page. */
indexRoute.get('/', function ( req, res, next ) {
  res.render('index', { title: 'Express' });
});

export default indexRoute;
