import React, { useEffect, useRef, useState } from 'react';

import Spinner from 'react-bootstrap/Spinner';

import ImageModal from '../ImageModal/ImageModal';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './ImageItem.module.scss';

const Placeholder = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
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
  const [modalShow, setModalShow] = React.useState(false);

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

  const imgSrc = image.webformatURL;

  return (
    <>
      <div
        {...rest}
        className={styles.gallery__item}
        style={{ gridRowEnd: `span ${spansCount}` }}
      >
        <div
          className={styles.item__card}
          ref={imageRef}
          style={!loading ? { display: 'block' } : { display: 'none' }}
        >
          <div
            style={!loading ? { backgroundImage: `url(${imgSrc})` } : {}}
            className={styles.gallery__img_div}
            onClick={() => setModalShow(true)}
          >
            <img
              src={imgSrc}
              className={styles.gallery__img}
              alt={image.tags}
              onLoad={handleLoad}
              style={{ visibility: 'hidden' }}
            />
          </div>
          <div className={styles.item__details}>{image.tags}</div>
        </div>
        <Placeholder
          ref={loaderRef}
          className={styles.spinner}
          style={loading ? { display: 'flex' } : { display: 'none' }}
        />
      </div>

      <ImageModal
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ImageItem;
