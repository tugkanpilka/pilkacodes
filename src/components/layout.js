import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


//LIBRARIES
import { Col, Row } from 'react-bootstrap';


class Layout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <Row style={styles.topRow} noGutters>
        <Col xs={11} >
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
