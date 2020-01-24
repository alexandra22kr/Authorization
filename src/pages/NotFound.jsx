import React from "react";
import PageHeadline from '../components/PageHeadline';

const NotFound = () => {
  return (
    <section className="section">
      <div className="container">
      <PageHeadline text="404 - Page not Found" />
        <h2 className="subtitle has-text-centered">
          Sorry, the page you were looking for could not be found...
        </h2>
      </div>
    </section>
  );
};

export default NotFound;
