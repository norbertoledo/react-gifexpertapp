import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { IuseFetchState } from "../interfaces";


export const useFetchGifs = (category: string): IuseFetchState => {
    
    const initialState: IuseFetchState = {
        data: [],
        isLoading: true
    };
    
    const [state, setState] = useState(initialState);
    
    useEffect(() => {
        getGifs(category, 15)
            .then( 
                imgs => setState( {data: imgs, isLoading: false} )
            )
            .catch( err => console.log(err))
    }, [category])

    return state;
}