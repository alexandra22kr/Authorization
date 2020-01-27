import React from 'react';

const PageHeadline = ({text, color}) => (
    <h1 className={(color ? color : '') + ' title ' + 'is-2 ' + 'has-text-centered'}>{text}</h1>
)

export default PageHeadline;