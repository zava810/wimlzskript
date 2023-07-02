import { createClient } from "next-sanity";

export async function getDataFromSanity(type, imageExist) {
    const client = createClient({
        projectId: 'h4sd5p60',
        dataset: 'production',
        apiVersion: '2023-04-10',
        useCdn: false
    })
    console.log(type, imageExist);
    const query = imageExist ? 
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
}   `;
    const data = await client.fetch(query)
    return data;
}