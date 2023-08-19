import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
    projectId: 'h4sd5p60',
    dataset: 'production',
    apiVersion: '2023-04-10',
    useCdn: false
})
const builder = imageUrlBuilder(client)

export async function getDataFromSanity(type, imageExist, params?) {
    const query = params ? (imageExist ? 
    `*[_type == '${type}' && slug.current == '${params}']
    {
    ...,
    image {
        asset-> {
            _id,
            url
        }
    }
    }` : 
    `*[_type == '${type}' && slug.current == '${params}']{
        ...,
}   `)  : (imageExist ? 
    `*[_type == '${type}']
    {
    ...,
    image {
        asset-> {
            _id,
            url
        }
    }
    }` : 
    `*[_type == '${type}']{
        ...,
}   `);
    const data = await client.fetch(query)
    return data;
}

export async function getSanityDataBySlug(type, slug) {
    const client = createClient({
        projectId: 'h4sd5p60',
        dataset: 'production',
        apiVersion: '2023-04-10',
        useCdn: false
    })
    const query = 
    `*[_type == '${type}' && slug.current == '${slug}']
    {
    ...,
    image {
        asset-> {
            _id,
            url
        }
    }
    }`;
    const data = await client.fetch(query)
    return data;
}

export function urlFor(source) {
    return builder.image(source)
  }