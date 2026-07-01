// src/database/repositories/CartRepository.ts

import { db } from "../database";
import { CartEntity } from "../types";

class CartRepository {
  async getAll(): Promise<CartEntity[]> {
    return db.getAllAsync<CartEntity>("SELECT * FROM cart ORDER BY id DESC");
  }

  async getByProductId(productId: number): Promise<CartEntity | null> {
    return db.getFirstAsync<CartEntity>(
      "SELECT * FROM cart WHERE productId = ?",
      [productId],
    );
  }

  async add(product: CartEntity): Promise<void> {
    const item = await this.getByProductId(product.productId);
    const quantity = item?.quantity ?? 1;

    await this.updateQuantity(product.productId, quantity + 1);

    await db.runAsync(
      `
      INSERT INTO cart (
        productId,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        thumbnail,
        quantity
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        product.quantity ?? 1,
      ],
    );
  }

  async updateQuantity(productId: number, quantity: number): Promise<void> {
    if (quantity <= 0) {
      await this.remove(productId);
      return;
    }

    await db.runAsync(
      `
      UPDATE cart
      SET quantity = ?
      WHERE productId = ?
      `,
      [quantity, productId],
    );
  }

  async remove(productId: number): Promise<void> {
    await db.runAsync("DELETE FROM cart WHERE productId = ?", [productId]);
  }

  async clear(): Promise<void> {
    await db.execAsync("DELETE FROM cart");
  }
}

export default new CartRepository();
