import { IGifGridItem } from '../interfaces';

function GifGridItem( {id, title, url}: IGifGridItem) {
    return (
        <div className="card animate__animated animate__fadeIn"
            key={id}
        >
            <img
                className="card animate__animated animate__fadeIn"
                src={url}
                alt={title} 
                />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
