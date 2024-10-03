# Angular Jobs App - Comet
A side project made to explore Angular 16, which is a jobs board app that has pocketbase in the backend.

## Setup
- `cd` into pb and run `./pocketbase serve`. Please note that this version of pb downloaded is for mac only. To run this project on another machine, you may need to download the correct binary from pocketbase [here](https://pocketbase.io/docs/).
- You may need to login for the first time using the creds you want at `127.0.0.1:8090`
- Using those creds, you can fill in your .env file based on `.env.example`
- Run the seed script with `npm run seed`
- In the admin UI, you can add jobs into the `job_listings` collection.
- Enjoy the app!
