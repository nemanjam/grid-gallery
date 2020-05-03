import React from 'react';
import Container from 'react-bootstrap/Container';

import ImageGrid from '../../components/ImageGrid/ImageGrid';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="pt-3">
        <ImageGrid />
      </Container>
    </>
  );
};
export default Home;
