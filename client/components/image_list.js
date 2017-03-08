/**
 * Created by aliyy on 2017/3/8.
 */
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'Pen', link: 'https://dummyimage.com/600x400' },
  { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
  { title: 'Mug', link: 'https://dummyimage.com/600x400'}
];

const ImageList = () => {
  const RenderedImages = IMAGES.map((image) => {
    return <ImageDetail key={image.title} picture={image}/>
  });

  return (
    <ul>
      {RenderedImages}
    </ul>
  )
};

export default ImageList;