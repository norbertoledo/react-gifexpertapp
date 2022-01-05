import { IGifGridItem, IGifGridResponse } from "../interfaces";

export const getGifs = async(category: string, limit: number = 10): Promise<IGifGridItem[] | never[]> => {
        
    const url: string = 'https://api.giphy.com/v1/gifs/search';
    const apiKey: string = '71RO1tdGF0XdFway81AIWA8bKWOOmVV6';
    const query: string = encodeURI( category );
    const resp = await fetch(`${url}?api_key=${apiKey}&q=${query}&limit=${limit}`);
    const {data} = await resp.json();

    const gifs: IGifGridItem[] | never[]  = data.map( 
        ({ id, title, images}: IGifGridResponse) => {
            const item: IGifGridItem = { 
                id, 
                title, 
                url: images?.downsized.url
            }
            return item;
        }
    )
    console.log(gifs);
    return gifs;
}
