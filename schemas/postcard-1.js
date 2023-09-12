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
            hidden: ({ parent, value }) => parent?.letterSigned == true
        },
        {
            name: 'letterTo', 
            title: 'This letter is to', 
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [ 
                {title: 'Jaehan', value: 'jaehan'},
                {title: 'Hwichan', value: 'hwichan'},
                {title: 'Sebin', value: 'sebin'},
                {title: 'Hangyeom', value: 'hangyeom'},
                {title: 'Taedong', value: 'taedong'},
                {title: 'Jehyun', value: 'jehyun'},
                {title: 'Xen', value: 'xen'},
                {title: 'Kevin', value: 'kevin'},
                {title: 'Junghoon', value: 'junghoon'},
                {title: 'Hyuk', value: 'hyuk'},
                {title: 'Yechan', value: 'yechan'},
                {title: 'OMEGA X', value: 'omegaX'}
              ]
            }
        },
        {
            name: 'letterMessage', 
            title: 'The contents of this letter are:', 
            type: 'text'
        },
        
    ]}
