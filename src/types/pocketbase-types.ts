/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	JobListings = "job_listings",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum JobListingsCategoryOptions {
	"healthcare" = "healthcare",
	"technology" = "technology",
	"education" = "education",
	"finance" = "finance",
	"marketing" = "marketing",
	"engineering" = "engineering",
	"sales" = "sales",
	"manufacturing" = "manufacturing",
	"hospitality" = "hospitality",
	"legal" = "legal",
	"other" = "other",
}
export type JobListingsRecord = {
	category?: JobListingsCategoryOptions
	city?: string
	description?: HTMLString
	image?: string
	name?: string
	state?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type JobListingsResponse<Texpand = unknown> = Required<JobListingsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	job_listings: JobListingsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	job_listings: JobListingsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'job_listings'): RecordService<JobListingsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
