import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


//LIBRARIES
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';


class Layout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <Row style={styles.topRow} noGutters>
        <Col xs={10} >
          {children}
        </Col>
      </Row>
    )
  }
}

const styles = {
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FAFAFA'
  }
}


export default Layout;
