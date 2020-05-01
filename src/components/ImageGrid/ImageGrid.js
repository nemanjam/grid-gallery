import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LoadMore from '../LoadMore/LoadMore';
import ImageItem from '../ImageItem/ImageItem';
import { loadImages } from '../../store/actions/imagesActions';

import styles from './ImageGrid.module.scss';

const ImageGrid = ({ loadImages, images: { images, loading, error } }) => {
  return (
    <>
      {images.length > 0 ? (
        <>
          <Row>
            <Col className={clsx(styles.gallery)}>
              {images.map((image, index) => {
                return (
                  <ImageItem
                    className={styles.gallery__item}
                    image={image}
                    key={index}
                  />
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col className={clsx('text-center', 'py-3')}>
              <LoadMore loadImages={loadImages} loading={loading} />
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col className="text-center">
            <h2>Search something</h2>
          </Col>
        </Row>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  images: state.images
});

export default connect(
  mapStateToProps,
  { loadImages }
)(ImageGrid);
