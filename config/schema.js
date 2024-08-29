import { integer, json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const CarListing=pgTable('CarListing',{
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle').notNull(),
    tagline: varchar('tagline'),
    originalPrice: varchar('originalPrice'),
    sellingPrice: varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition: varchar('condition').notNull(),
    make:varchar('make').notNull(),
    model: varchar('model').notNull(),
    year: varchar('year').notNull(),
    driveType: varchar('driveType').notNull(),
    transmission: varchar('transmission').notNull(),
    fuelType: varchar('fuelType').notNull(),
    mileage: text('mileage').notNull(),
    engineSize:varchar('engine'),
    cylinder:varchar('cylinder'),
    color: varchar('color').notNull(),
    door: varchar('door').notNull(),
    vin: varchar('vin'),
    offerType: text('offerType'),
    listingDescription: text('listingDescription').notNull(),
    features:json('features'),
    createdBy: varchar('createdBy').notNull(),
    userName: varchar('userName').notNull().default('Car-Ninja'),
    userImageUrl: varchar('userImageUrl').default('https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybDc5Z21Id1FXOTVoaVRvQ3E5OURwN2dEVDgifQ?width=80'),
    postedOn:varchar('postedOn'),

  
});

export const CarImages=pgTable('carImages',{
    id: serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    CarListingId:integer('CarListingId').notNull().references(()=>CarListing.id),
})