/**
 * Mockup class that imitates a data persistence layer at a basic level
 */
export default class dataStore {
  static _store = {}

  static write( { name, key, value } ) {
    dataStore._store[name][key] = value;
  }

  static read( { name, key } = {} ) {
    if ( key )
      return dataStore._store[name][key]
    else
      return dataStore._store[name]
  }
}