import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

//LAYOUTa
import Layout from "../components/layout";

//FONTS
import { Headline1, Colors } from "../components/fonts/Fonts";

//CUSTOM COMPONENTS
import PostHeader from "../components/post-header/PostHeader";
import PostEntryImage from '../components/post-entry-image/PostEntryImage';
import PostFooter from '../components/post-footer/PostFooter';
import PostContainer from '../components/post-container/PostContainer';


export default function Post() {
    return (
        <Layout>
            <PostHeader />
            <PostEntryImage />
            <PostContainer />
            <PostFooter />
        </Layout>
    )
}