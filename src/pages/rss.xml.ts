import rss from '@astrojs/rss';
import { getAllPosts } from '../utils.astro';

type Context = {
    site: string | URL
}

export async function GET(context: Context) {
    const title = 'Astro Learner | Blog';
    const description = 'My journey learning Astro';

    const blogPosts = await getAllPosts();

    return rss({
        title: title,
        description: description,
        site: context.site,
        items: blogPosts.map((post) => ({
                link: post.url,
                title: post.title ? post.title : title,
                pubDate: new Date(post.pubDate),
                description: post.description ? post.description : description,
            })),
        customData: `<language>en-us</language>`,
    });
}