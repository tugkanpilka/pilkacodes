import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

//LAYOUT
import { Col, Row, Container } from 'react-bootstrap';

//CUSTOM COMPONENTS
import PostCard from '../post-card/PostCard';


export default function Posts() {

    const data = useStaticQuery(graphql`
        query GetPostList {
            allMarkdownRemark {
                edges {
                node {
                    fields {
                        slug
                    }
                }
                }
                nodes {
                    frontmatter {
                        description
                        title
                        date
                    }
                }
            }
        }
    `)

    return (
        <Row>
            {data.allMarkdownRemark.nodes.map((node) => (
                <Col xs={12} sm={12} md={6} xl={4} >
                    <PostCard data={node.frontmatter} />
                </Col>
            ))}
        </Row>
    )
}