// import { Injectable } from '@angular/core';
// import { JobListingsRecord, JobListingsResponse } from 'src/types/pocketbase-types';

// @Injectable({
//   providedIn: 'root'
// })
// export class JobsService {
//   readonly baseUrl = "/assets";
//   jobListings: JobListing[] = [
//     {
//       id: 9999,
//       name: "Steel mill job at company X",
//       city: "Melbourne",
//       state: "VIC",
//       photo: `${this.baseUrl}/steel-job.jpg`,
//       description: "Hot new position at X company.",
//       category: "technology",
//     },
//   ];

//   constructor() { }

//   getAll(): JobListingsResponse {
//     return this.jobListings;
//   }
//   getById(id: number): JobListingsRecord | undefined {
//     return this.jobListings.find((housingLocation) => housingLocation.id === id);
//   }

//   submitApplication(firstName: string, lastName: string, email: string) {
//     console.log(
//       `Job application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
//     );
//   }
// }
