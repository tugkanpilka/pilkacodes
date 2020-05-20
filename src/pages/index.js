import React from "react";

//LAYOUT
import Layout from '../components/layout';

//FONTS
import { Headline1, Colors } from '../components/fonts/Fonts';

//CUSTOM 
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import AboutMe from '../components/about-me/AboutMe';
import Posts from '../components/posts/Posts';

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <Header />
        <Banner />
        <AboutMe />
        <Posts />
      </Layout>
    )
  }
}

export default IndexPage
