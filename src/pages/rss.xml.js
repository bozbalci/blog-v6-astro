import rss from '@astrojs/rss';


export function GET(context) {
    return rss({
        title: 'Berk Ozbalci\'s blog',
        // `<description>` field in output xml
        description: 'Personal home page of Berk Ozbalci',
        site: context.site,
        items: [],
        customData: `<language>en-us</language>`,
    });
}