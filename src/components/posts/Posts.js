import React from 'react';

//LAYOUT
import { Col, Row, Container } from 'react-bootstrap';

//CUSTOM COMPONENTS
import PostCard from '../post-card/PostCard';


class Posts extends React.Component {

    renderPosts() {
        return dummyData.map(data => 
            <Col xs={12} sm={12} md={6} xl={4} >
                <PostCard data={data} />
            </Col>
        )
    }

    render() {
        return (
            <Row>
                {this.renderPosts()}
            </Row>
        )
    }
}


const dummyData = [
    {
        'title': 'What about Gatsby.js',
        'description': 'Usage of Gatsby.js',
        'backgroundImage': 'https://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg'
    },
    {
        'title': 'My experiences with React.js',
        'description': 'Usage of Gatsby.js',
        'backgroundImage': 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
    },
    {
        'title': 'All about React Native',
        'description': 'Usage of Gatsby.js',
        'backgroundImage': 'https://webmaster.kitchen/wp-content/uploads/react-native-logo-1-e1519651096769.jpg'
    },
    {
        'title': 'Native Development vs React Native',
        'description': 'Usage of Gatsby.js',
        'backgroundImage': 'https://www.technopat.net/wp-content/uploads/2019/07/react-native.jpg'
    },
    {
        'title': 'iOS Developement fundamentals',
        'description': 'Usage of Gatsby.js',
        'backgroundImage': 'https://wallpapercave.com/wp/wp4923981.jpg'
    },
]

export default Posts;