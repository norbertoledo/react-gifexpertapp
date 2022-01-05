import GifGridItem from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';
import { IGifGrid, IGifGridItem } from "../interfaces";


function Gifgrid( {category}: IGifGrid) {

    const { data: gifs, isLoading} = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {
                isLoading
                    ? <p className='animate__animated animate__flash'>cargando...</p>
                    : !gifs.length
                        ? <p>No hay data para mostrar</p>
                        : <div className="card-grid">   
                            {
                                gifs.map( (item: IGifGridItem) => 
                                    <GifGridItem 
                                    key={item.id} 
                                    {...item}
                                    /> 
                                    )
                            }    
                            </div>   
            }
        </>
    )
}

export default Gifgrid
