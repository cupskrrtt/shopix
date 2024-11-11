import { relations } from "drizzle-orm";
import { boolean, date, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("user", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	email: varchar({ length: 255 }).unique().notNull(),
	password_hash: text().notNull(),
	first_name: varchar({ length: 255 }).notNull(),
	last_name: varchar({ length: 255 }).notNull(),
	phone: text().notNull(),
	is_active: boolean().default(true).notNull(),
	last_login: date().defaultNow(),
	created_at: date().defaultNow(),
	updated_at: date().defaultNow(),
});

export const userRelations = relations(usersTable, ({ many }) => ({
	userAddressesTable: many(userAddressesTable),
}));

export const userAddressesTable = pgTable("user_addresses", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	user_id: varchar(),
	address_line1: text().notNull(),
	address_line2: text(),
	city: text().notNull(),
	state: text().notNull(),
	postal_code: text().notNull(),
	country: text().notNull(),
	is_default: boolean().notNull(),
	created_at: date().defaultNow(),
	updated_at: date().defaultNow(),
});

export const addressRelation = relations(userAddressesTable, ({ one }) => ({
	user: one(usersTable, {
		fields: [userAddressesTable.user_id],
		references: [usersTable.id],
	}),
}));
