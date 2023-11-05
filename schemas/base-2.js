// schemas/base-2.js
export default {
  title: 'Base-2', //human readable label
  name: 'base-2', //the field name, this will be the key to access within the data
  type: 'document', //name of a valid schema type - DOCUMENT is what every other type is stored inside of!
  fields: [
    {
      title: 'Postcard Image',
      name: 'postcardAlt',
      type: 'string'
    },
    {
      title: 'Postcard Base',
      name: 'postcardBase',
      type: 'image'
    }
  ]
}
