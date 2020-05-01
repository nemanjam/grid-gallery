import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

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
                  <div className={styles.gallery__item} key={index}>
                    <img
                      className={styles.gallery__img}
                      src={image.previewURL}
                      alt={image.tags}
                    />
                  </div>
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col className={clsx('text-center', 'py-3')}>
              {!loading ? (
                <Button onClick={loadImages} variant="primary">
                  Load more
                </Button>
              ) : (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              )}
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
