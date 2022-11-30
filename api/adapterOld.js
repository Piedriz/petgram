import { Low, JSONFileSync, MemorySync } from 'lowdb'

import json from './db.json' assert { type: 'json'}
const isLocal = !process.env.NOW_REGION
const type = isLocal ? new JSONFileSync('./db.json') : new MemorySync()

export const db = new Low(type)

await db.read()

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { posts: [] }
db.data = db.data || { posts: [] } // for node < v15.x

// db.defaults(json).write()

