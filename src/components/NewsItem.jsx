import React from "react";
import styled from 'styled-components';

const StyledNewsItem = styled.li`
    width: 32%;
    margin: 0.6rem 0.25rem;
    padding:  1.5rem;
    background:  #fff;
    cursor: pointer;
    transition: .2s;

    &:hover {
        background: hsl(48, 100%, 67%);
        transform: scale(1.03);
    }
`;

const NewsItem = ({ title, author, description, urlToImage }) => (
    <StyledNewsItem>
      <figure class="image is-256x256">
        <img src={urlToImage} />
      </figure>
      <h3 className="title is-4">{title}</h3>
      <p>{author}</p>
      <p>{description}</p>
    </StyledNewsItem>
);


export default NewsItem;