import { useState } from "react"
import AddCategory from "./AddCategory";
import Gifgrid from "./Gifgrid";

const GifExpertApp = () => {

    const initial: string[] = ['Beto'];
    const [categories, setCategories] = useState( initial )
    
    const handleAdd = (newCategory: string) => {
        setCategories( cats => [newCategory, ...cats] );
    }
    

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory addCategory = { handleAdd }/>
            <hr />
            <ol>
                {
                    categories.map( category => 
                            <Gifgrid 
                                key = {category}
                                category = {category}
                            />   
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp

