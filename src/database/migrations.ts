// src/database/migrations.ts

import { db } from "./database";

export async function runMigrations() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      productId INTEGER NOT NULL UNIQUE,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      discountPercentage REAL NOT NULL,
      rating REAL NOT NULL,
      stock INTEGER NOT NULL,
      thumbnail TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS cart (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      productId INTEGER NOT NULL UNIQUE,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      discountPercentage REAL NOT NULL,
      rating REAL NOT NULL,
      stock INTEGER NOT NULL,
      thumbnail TEXT NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1
    );
  `);
}
