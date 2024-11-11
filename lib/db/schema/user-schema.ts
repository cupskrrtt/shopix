import { pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("user", {
	id: varchar({ length: 255 }).primaryKey(),
});
