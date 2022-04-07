import { Router as expressRouter } from 'express';
import dataStore                                             from "../services/dataStore.js";

const playlistsRoute = expressRouter()

// Get all
playlistsRoute.get('/', ( req, res, next ) => {
  res.send(dataStore.read({name: "playlists"}));
});

// Get by ID
playlistsRoute.get('/:id', ( req, res, next ) => {
  res.send(dataStore.read({name: "playlists", key: req.params.id}));
})

// Write without ID (one would be auto-assigned by data-store)
playlistsRoute.post('/', ( req, res, next ) => {
  dataStore.write({name: "playlists", value: req.body})
  res.statusCode = 201 // Created
  res.send();
})

export default playlistsRoute;
