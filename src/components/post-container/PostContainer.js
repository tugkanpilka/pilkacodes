import React from "react";
import styled from 'styled-components';

import '../../styles/post.css';

const TextContainer = styled.div`
    padding: 12% 24% 0 24%;

    @media screen and (max-width: 960px) {
        padding: 3rem 5rem 3rem 5rem;
    }

    @media screen and (max-width: 768px) {
        padding: 120px 0 0 0;
    }
`;


export default function PostContainer() {
    return (
        <TextContainer>
            <h3>Merhaba Dünya</h3>
            <p>
            The fact is, developers are curious by nature (or at least they should), and as a front-end developer I always try to improve myself by studying and experimenting. So, I examined the source code of React Reveal and I realized that it uses synchronous listeners on document scroll and window resize events to determine if each observed element is inside or outside the viewport. This works fine, and when the library was first written this was the only way to handle the problem, but year after year the Web has evolved, and new APIs came out.
            </p>
            <q>
            The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document’s viewport – MDN
            </q>
            <p>
            The fact is, developers are curious by nature (or at least they should), and as a front-end developer I always try to improve myself by studying and experimenting. So, I examined the source code of React Reveal and I realized that it uses synchronous listeners on document scroll and window resize events to determine if each observed element is inside or outside the viewport. This works fine, and when the library was first written this was the only way to handle the problem, but year after year the Web has evolved, and new APIs came out.
            </p>
            <h3>Merhaba Dünya</h3>
            <p>
            The fact is, developers are curious by nature (or at least they should), and as a front-end developer I always try to improve myself by studying and experimenting. So, I examined the source code of React Reveal and I realized that it uses synchronous listeners on document scroll and window resize events to determine if each observed element is inside or outside the viewport. This works fine, and when the library was first written this was the only way to handle the problem, but year after year the Web has evolved, and new APIs came out.
            </p>
            <p>
            The fact is, developers are curious by nature (or at least they should), and as a front-end developer I always try to improve myself by studying and experimenting. So, I examined the source code of React Reveal and I realized that it uses synchronous listeners on document scroll and window resize events to determine if each observed element is inside or outside the viewport. This works fine, and when the library was first written this was the only way to handle the problem, but year after year the Web has evolved, and new APIs came out.
            </p>

            <code>
                {'this.setState({ "hello": "kro" })'}
            </code>

            <p>
            The fact is, developers are curious by nature (or at least they should), and as a front-end developer I always try to improve myself by studying and experimenting. So, I examined the source code of React Reveal and I realized that it uses synchronous listeners on document scroll and window resize events to determine if each observed element is inside or outside the viewport. This works fine, and when the library was first written this was the only way to handle the problem, but year after year the Web has evolved, and new APIs came out.
            </p>
            <q>
            The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document’s viewport – MDN
            </q>
        </TextContainer>
    )
}