import React, { useEffect, useRef, useState } from 'react';

import Spinner from 'react-bootstrap/Spinner';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './ImageItem.module.scss';

const Placeholder = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props} className={styles.spinner}>
      <Spinner animation="border" />
    </div>
  );
});

const ImageItem = ({ image, style, ...rest }) => {
  const imageRef = useRef(null);
  const loaderRef = useRef(null);
  const [spansCount, setSpansCount] = useState(0);
  const [width, height] = useWindowSize();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imageRef.current && !loading) {
      calculateSpans(imageRef);
    }
  }, [imageRef, loading, width, height]);

  useEffect(() => {
    if (loaderRef.current && loading) {
      calculateSpans(loaderRef);
    }
  }, [loaderRef, loading]);

  const calculateSpans = ref => {
    const height = ref.current.clientHeight;
    const spansCount = Math.ceil(height / 10 + 1);
    setSpansCount(spansCount);
  };

  const handleLoad = e => {
    setLoading(false);
  };

  // console.log('spansCount', spansCount);
  // console.log('styles.gallery__item', styles.gallery__item);
  // style={{ gridRowEnd: `span ${spansCount}` }}

  return (
    <div
      {...rest}
      className={styles.gallery__item}
      style={{ gridRowEnd: `span ${spansCount}` }}
    >
      <img
        src={image.previewURL}
        ref={imageRef}
        className={styles.gallery__img}
        alt={image.tags}
        onLoad={handleLoad}
        style={!loading ? { display: 'block' } : { display: 'none' }}
      />
      <Placeholder
        ref={loaderRef}
        style={loading ? { display: 'flex' } : { display: 'none' }}
      />
    </div>
  );
};

export default ImageItem;
