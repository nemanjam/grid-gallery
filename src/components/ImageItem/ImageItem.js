import React from 'react';
import ImageLoader from 'react-load-image';

import Spinner from 'react-bootstrap/Spinner';

import styles from './ImageItem.module.scss';

const PreLoader = () => {
  return (
    <div className={styles.spinner}>
      <Spinner animation="border" />
    </div>
  );
};

const Error = () => {
  return <h2>Error</h2>;
};

const ImageItem = ({ image }) => {
  return (
    <ImageLoader src={image.previewURL}>
      <img className={styles.gallery__img} alt={image.tags} />
      <Error />
      <PreLoader />
    </ImageLoader>
  );
};
export default ImageItem;
