import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import styles from './ImageModal.module.scss';

const Placeholder = props => {
  return (
    <div {...props}>
      <Spinner animation="border" />
    </div>
  );
};

const ImageModal = ({ image, ...props }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = e => {
    setLoading(false);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {image.tags}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className={styles.image}
          src={image.largeImageURL}
          alt={image.tags}
          onLoad={handleLoad}
          style={loading ? { display: 'none' } : { display: 'block' }}
        />
        <Placeholder
          className={styles.spinner}
          style={loading ? { display: 'flex' } : { display: 'none' }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
