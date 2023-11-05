// schemas/postcard-1.js
export default {
    title: 'Postcard Schema', //human readable label
    name: 'postcard-1', 
    type: 'document', 
    description: 'the outline of postcard letter subs data',
    fields: [
        {
            name: 'letterSigned', 
            title: 'Is this letter signed with a nickname?', 
            type: 'boolean', 
            layout: 'checkbox',
            initialValue: true
        },
        { //make this field change based on previous field's answer
            name: 'letterFrom', 
            title: 'This letter is from', 
            type: 'string', 
            initialValue: 'FOR X',
            // hidden: ({ parent, value }) => parent?.letterSigned == true
        },
        {
            name: 'letterTo', 
            title: 'This letter is to', 
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [ 
                {title: 'Jaehan', value: 'Jaehan'},
                {title: 'Hwichan', value: 'Hwichan'},
                {title: 'Sebin', value: 'Sebin'},
                {title: 'Hangyeom', value: 'Hangyeom'},
                {title: 'Taedong', value: 'Taedong'},
                {title: 'Jehyun', value: 'Jehyun'},
                {title: 'Xen', value: 'Xen'},
                {title: 'Kevin', value: 'Kevin'},
                {title: 'Junghoon', value: 'Junghoon'},
                {title: 'Hyuk', value: 'Hyuk'},
                {title: 'Yechan', value: 'Yechan'},
                {title: 'OMEGA X', value: 'ALL'}
              ]
            }
        },
        {
          title: 'Postcard Design',
          name: 'postcardDesign',
          type: 'reference',
          to: [{type: 'base-2'}]
        },
        {
            name: 'letterMessage', 
            title: 'The contents of this letter are:', 
            type: 'text'
        },
        
    ]}
