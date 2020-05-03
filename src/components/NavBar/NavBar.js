import React, { useState } from 'react';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { setQuery, resetPage } from '../../store/actions/searchActions';
import { loadImages } from '../../store/actions/imagesActions';

const NavBar = ({ loadImages, setQuery, resetPage }) => {
  const [localQuery, setLocalQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (/^[a-zA-Z]{3,}$/.test(localQuery)) {
      resetPage();
      setQuery(localQuery);
      loadImages();
    } else {
      alert('Invalid query.');
    }
  };

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home">Grid Gallery</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
        </Nav>
        <Form inline onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="validationFormik02">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={localQuery}
              onChange={e => setLocalQuery(e.target.value)}
            />
            <Button type="submit" variant="outline-primary">
              Search
            </Button>
          </Form.Group>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  query: state.search.query
});

export default connect(
  mapStateToProps,
  { loadImages, setQuery, resetPage }
)(NavBar);
