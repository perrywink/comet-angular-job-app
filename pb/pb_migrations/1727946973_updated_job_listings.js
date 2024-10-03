/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uhkyq0vkk89qsdk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nllikwjm",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
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
        "other"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uhkyq0vkk89qsdk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nllikwjm",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "healthcare",
        "technology",
        "education",
        "finance",
        "marketing",
        "engineering",
        "sales"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
