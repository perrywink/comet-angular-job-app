import PocketBase from "pocketbase";

const pocketBaseUrl = "http://127.0.0.1:8090";

console.log(`will seed database at ${pocketBaseUrl}`);

const client = new PocketBase(pocketBaseUrl);
const user = process.env["PB_ADMIN_EMAIL"];
const password = process.env["PB_ADMIN_PASSWORD"];

if (user === undefined || password === undefined) {
  throw Error("PB_ADMIN_EMAIL or PB_ADMIN_PASSWORD not set");
}

console.log(`${user}:${password}`);

await client.admins.authWithPassword(user, password);

await client.collections.create({
  name: "job_listings",
  type: "base",
  schema: [
    {
      name: "category",
      type: "select",
      options: {
        maxSelect: 1,
        values: [
          "healthcare",
          "technology",
          "education",
          "finance",
          "marketing",
          "engineering",
          "sales",
          "manufacturing",
          "hospitality",
          "legal",
          "other",
        ],
      },
    },
    {
      name: "city",
      type: "text",
    },
    {
      name: "description",
      type: "editor",
    },
    {
      name: "image",
      type: "file",
      options: {
        maxSelect: 1,
        maxSize: 5242880,
        mimeTypes: ["image/jpg", "image/jpeg", "image/png"],
        thumbs: ["100x100"],
      },
    },
    {
      name: "name",
      type: "text",
    },
    {
      name: "state",
      type: "text",
    },
  ],
});

console.log('Job listings collection created successfully');

// await client.collection('job_listings').create({
//     category: 'technology',
//     city: 'San Francisco',
//     description: '<p>We are looking for a talented software engineer...</p>',
//     name: 'Senior Software Engineer',
//     state: 'CA'
// });

// console.log('Seed script completed');
