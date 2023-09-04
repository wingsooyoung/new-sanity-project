// schemas/first.js
export default {
  title: 'The Schema Title', //human readable label
  name: 'first', //the field name, this will be the key to access within the data
  type: 'document', //name of a valid schema type - DOCUMENT is what every other type is stored inside of!
  description: 'This is my first attempt at creating a schema from scratch.', //description of how to use this schema, directed to editors
  fields: [
    {
      name: 'name', //the field name, this will be the key to access within the data
      title: 'The First Title', //human readable label
      type: 'string', //name of a valid schema type
      initialValue: 'Example Title Text'
    },
    {
      title: 'Category Set',
      name: 'categorySet',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [ //presented as an array of checkboxes
          {title: 'Building', value: 'building'},
          {title: 'Master plan', value: 'masterPlan'},
          {title: 'Infrastructure', value: 'infrastructure'},
          {title: 'Private Home', value: 'privateHome'}
        ]
      }
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags' //presented as a 'tokenizing tag-field' - ONLY WORKS FOR STRINGS
      }
    },
    {
      title: 'Grid Tags',
      name: 'grids',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid' //presented as a grid 
      }
    },
    {
      title: 'The Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}] //this provides a rich-text editor for block content
    },
    {
      title: 'Has the movie been released?',
      name: 'released',
      type: 'boolean',
      layout: 'checkbox' //default is 'switch'
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD', //default - can be anything from here -> https://momentjs.com/docs/#/displaying/format/ 
        calendarTodayLabel: 'Today' //not sure what this is???
      }
    },
    {
      title: 'Launch Scheduled At',
      name: 'launchAt',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD', //default - can be anything from here -> https://momentjs.com/docs/#/displaying/format/ 
        timeFormat: 'HH:mm', //default - can be anything from here -> https://momentjs.com/docs/#/displaying/format/ 
        timeStep: 15, //# of minutes btwn each entry of time, 15 is the default
        calendarTodayLabel: 'Today' //not sure what this is???
      }
    },
    {
      title: 'Manuscript',
      name: 'manuscript',
      type: 'file', //this type is used for NON-IMAGE files
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description'
        },
        {
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: {type: 'person'}
        }
      ]
    },
    {
      title: 'Launchpad Location',
      name: 'location',
      type: 'geopoint' 
//      output:
  //     {
  //      "_type": "geopoint",
 //       "lat": 58.63169011423141,
  //      "lng": 9.089101352587932,
  //      "alt": 13.37
 //      }
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },
    {
      title: 'Current popularity',
      name: 'popularity',
      type: 'number',
      validation: Rule => Rule.integer().min(1).max(10)
    },
    {
      type: 'object',
      name: 'person',
      fieldsets: [
        {name: 'social', title: 'Social media handles'}
      ],
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string'
        },
        {
          title: 'Twitter',
          name: 'twitter',
          type: 'string',
          fieldset: 'social'
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'string',
          fieldset: 'social'
        },
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'string',
          fieldset: 'social'
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'movie',
      type: 'object',
      fields: [
        {
          title: 'Director',
          name: 'director',
          type: 'reference',
          to: [{type: 'person'}]
        }
      ]
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
  
    
  ]
}
