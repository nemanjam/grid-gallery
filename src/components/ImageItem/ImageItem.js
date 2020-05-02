import React, { useEffect, useRef, useState } from 'react';
import ImageLoader from 'react-load-image';

import Spinner from 'react-bootstrap/Spinner';

import styles from './ImageItem.module.scss';

const PreLoader = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.spinner}>
      <Spinner animation="border" />
    </div>
  );
});

const Error = () => {
  return <h2>Error</h2>;
};

const BackgroundImage = ({ src, style = {}, ...props } = {}) => (
  <div
    style={Object.assign({ backgroundImage: `url(${src})` }, style)}
    {...props}
  />
);

const ImageItem = ({ image, style, ...rest }) => {
  const imageRef = useRef(null);
  const loaderRef = useRef(null);
  const [spansCount, setSpansCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageRef.current) {
      const height = imageRef.current.clientHeight;
      const spansCount = Math.ceil(height / 10 + 1);
      setSpansCount(spansCount);
    }
  }, [imageRef.current]);

  useEffect(() => {
    if (loaderRef.current && isLoading) {
      const height = loaderRef.current.clientHeight;
      const spansCount = Math.ceil(height / 10 + 1);
      setSpansCount(spansCount);
    }
  }, [isLoading]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      {...rest}
      className={styles.gallery__item}
      style={{ gridRowEnd: `span ${spansCount}` }}
    >
      <ImageLoader src={image.previewURL} onLoad={handleLoad}>
        <img ref={imageRef} className={styles.gallery__img} alt={image.tags} />
        <Error />
        <PreLoader ref={loaderRef} />
      </ImageLoader>
    </div>
  );
};

const ImageItemBackGround = ({ image, ...rest }) => {
  return (
    <ImageLoader {...rest} src={image.previewURL}>
      <BackgroundImage className={styles.gallery__img} />
      <Error />
      <PreLoader />
    </ImageLoader>
  );
};

export default ImageItem;
