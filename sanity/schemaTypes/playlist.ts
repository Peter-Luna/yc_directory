import { defineField, defineType } from 'sanity';

export const playlist = defineType({
  name: 'playlist',
  title: 'playlists',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        // 'This is a great startup' -> 'this-is-a-great-startup'
      },
    }),
    defineField({
      name: 'select',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'startup' }] }],
    }),
  ],
});
