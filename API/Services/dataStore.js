/**
 * Mockup class that imitates a data persistence layer at a basic level
 */
export default class dataStore {
  static _store = {}

  static write( { name, key, value } ) {
    if (!key) {
      // Assign a unique ID. In a real-world data store, this could be done at a database level with either sequential
      // IDs on insert or UUIDs.
      key = crypto.randomUUID()
    }
    dataStore._store[name][key] = value;
  }

  static read( { name, key = null } = {} ) {
    if ( key )
      return dataStore._store[name][key]
    else
      return dataStore._store[name]
  }
}