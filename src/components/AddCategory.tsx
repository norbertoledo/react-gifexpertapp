import { ChangeEvent, FormEvent, useState } from "react";
import { IAddCategory } from "../interfaces";


const AddCategory = ( props: IAddCategory ) => {
    const { addCategory } = props;
    const initialValue: string = '';
    const [inputValue, setInputValue] = useState(initialValue);
    
    const handleInputChange = ( el: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(el.target.value);
    }
    
    const handleSubmit = (el: FormEvent<HTMLFormElement>) => {   
        el.preventDefault();
        addCategory( inputValue );
        setInputValue('');
    }

    return (
        <form onSubmit={inputValue.trim().length > 2 ? handleSubmit : (el)=>{el.preventDefault()}}>
            <input 
                type="text"
                placeholder="Search your GIF"
                value={inputValue}
                onChange={el => handleInputChange(el)}
                />            
        </form>
    )
}

export default AddCategory
