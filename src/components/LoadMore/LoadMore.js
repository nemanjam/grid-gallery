import React from 'react';
import clsx from 'clsx';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import styles from './LoadMore.module.scss';

const LoadMore = ({ loading, loadImages }) => {
  return (
    <>
      {!loading ? (
        <Button onClick={loadImages} variant="outline-primary">
          Load more
        </Button>
      ) : (
        <Button variant="outline-primary" disabled>
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
    </>
  );
};

export default LoadMore;
