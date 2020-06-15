import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

class ImageList extends React.Component {
    render(){
        const image = this.props.images.map( image => {
            return (<ImageCard key={image.id} image={image}></ImageCard>);
        })
        return <div className="image-list">{image}</div>
    }
}

export default ImageList;