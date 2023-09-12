// schemas/base.js
export default {
  title: 'Base', //human readable label
  name: 'base', //the field name, this will be the key to access within the data
  type: 'document', //name of a valid schema type - DOCUMENT is what every other type is stored inside of!
  fields: [
    {
      title: 'Postcard Base',
      name: 'postcardBase',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ]
    }
  ]
}


