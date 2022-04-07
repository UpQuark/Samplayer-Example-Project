import { Router as PlaylistsRoute } from 'express';

/* GET all playlists */
PlaylistsRoute.get('/', function ( req, res, next ) {
  res.render('index', { title: 'Playlists' });
});

export default PlaylistsRoute;
