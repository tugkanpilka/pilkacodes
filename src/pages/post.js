import React from "react";
import { graphql, StaticQuery } from "gatsby";

//LAYOUTa
import Layout from "../components/layout";


//CUSTOM COMPONENTS
import PostHeader from "../components/post-header/PostHeader";
import PostEntryImage from '../components/post-entry-image/PostEntryImage';
import PostFooter from '../components/post-footer/PostFooter';
import PostContainer from '../components/post-container/PostContainer';
import Header from '../components/header/Header';

let searchUrl = '';

export default function Post({ location }) {

    searchUrl = typeof window !== 'undefined' ? window.location.href : '';
    const splitted = searchUrl.split('/');
     
    return (
        <StaticQuery 
            query={query}
            render={data => data.allMarkdownRemark.nodes.map(obj => obj.frontmatter.url === splitted[splitted.length - 1] && (
                <Layout>
                    <Header />
                    <PostHeader data={obj} />
                    <PostEntryImage data={obj} />
                    <PostContainer data={obj}/>
                    <PostFooter />
                </Layout>
            ))}
        />
    )
}

const query = graphql`
    query MyQuery($searchUrl: String) {
        allMarkdownRemark(filter: {frontmatter: {url: {eq: $searchUrl}}}) {
            nodes {
                frontmatter {
                    description
                    title
                    url
                    date
                    entryImageUrl
                }
                html
            }
        }
    }
`
