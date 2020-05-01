import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../store/actions/imagesActions';

import styles from './ImageGrid.module.scss';

const ImageGrid = ({ loadImages, images: { images, loading, error } }) => {
  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className={styles.gallery}>
      {!loading &&
        images.map((image, index) => {
          return (
            <div className={styles.gallery__item} key={index}>
              <img
                className={styles.gallery__img}
                src={image.previewURL}
                alt={image.tags}
              />
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.images
});

export default connect(
  mapStateToProps,
  { loadImages }
)(ImageGrid);
