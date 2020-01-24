import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const StyledNewsList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const NewsList = ({news}) => {
    return(
        // <div className="tile is-ancestor">
        <StyledNewsList>
            {news.map(item => <NewsItem key={item.id} {...item} />)}
        </StyledNewsList>
        // </div>
    );
}

export default NewsList;