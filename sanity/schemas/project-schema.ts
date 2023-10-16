    const project = {

        name: 'blog',
        title: 'Blog',
        type: 'document',
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string',
            },
            {
                name: 'publication',
                title: 'Publication',
                type: 'date',
            },

            {
                name: 'subtitle',
                title: 'Subtitle',
                type: 'array',
                of: [{ type: 'block' }]
            },

            {
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: { source: 'name' },
                 
            },

            {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true},
                fields: [
                    {
                         name: 'alt',
                         title: 'Alt',
                         type: 'string'
                    }
                ]
                 
            },

            {
                name: 'url',
                title: 'URL',
                type: 'url',
            },

            {
                name: 'content',
                title: 'Content',
                type: 'array',
                of: [{ type: 'block' }]
            },
            {
                name: 'link',
                title: 'Link',
                type: 'string',
            },
        ]
    }

    export default project;