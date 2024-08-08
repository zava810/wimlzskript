"use server";

export async function getMediumPosts() {
    try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vishnuksvichu12345');
        const data = await response.json();
        data.items.forEach(element => {
            element.slug = element.title.replace(/[\.\s\/]/g, "_");
        });
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getMediumPostById(slug: string) {
    try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vishnuksvichu12345`);
        const data = await response.json();
        const post = data.items.map((post) => {
            const postSlug = post.title.replace(/[\.\s\/]/g, "_");
            if (postSlug === slug) {
                return post;
            }
        }).filter((item) => item !== undefined)[0];
        return post;
    } catch (error) {
        throw new Error(error);
    }
}