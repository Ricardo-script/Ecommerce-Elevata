// src/database/repositories/FavoriteRepository.ts

import { db } from "../database";
import { FavoriteEntity } from "../types";

class FavoriteRepository {
  async getAll(): Promise<FavoriteEntity[]> {
    return db.getAllAsync<FavoriteEntity>(
      "SELECT * FROM favorites ORDER BY id DESC",
    );
  }

  async getByProductId(productId: number): Promise<FavoriteEntity | null> {
    return db.getFirstAsync<FavoriteEntity>(
      "SELECT * FROM favorites WHERE productId = ?",
      [productId],
    );
  }

  async isFavorite(productId: number): Promise<boolean> {
    const favorite = await this.getByProductId(productId);

    return favorite !== null;
  }

  async add(product: FavoriteEntity): Promise<void> {
    await db.runAsync(
      `
      INSERT OR IGNORE INTO favorites (
        productId,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        thumbnail
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        product.productId,
        product.title,
        product.description,
        product.category,
        product.price,
        product.discountPercentage,
        product.rating,
        product.stock,
        product.thumbnail,
      ],
    );
  }

  async remove(productId: number): Promise<void> {
    await db.runAsync("DELETE FROM favorites WHERE productId = ?", [productId]);
  }

  async clear(): Promise<void> {
    await db.execAsync("DELETE FROM favorites");
  }
}

export default new FavoriteRepository();
