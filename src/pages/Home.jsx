import React, { Component, useState } from "react";
import PageHeadline from "../components/PageHeadline";

const Home = () => (
  <section className="section">
    <PageHeadline text="TechCrunch" color="has-text-warning" />
    <p className="has-text-warning">
      TechCrunch is an American online publisher focusing on the tech industry.
      The company specifically reports on the business related to tech,
      technology news, analysis of emerging trends in tech, and profiling of new
      tech businesses and products. It was one of the earliest publications to
      report extensively on tech startups and funding.
    </p>
    <p className="has-text-warning">
      TechCrunch was founded in June 2005 by Archimedes Ventures, led by
      partners Michael Arrington and Keith Teare. In 2010, AOL acquired the
      company for approximately $25 million.
    </p>
  </section>
);

export default Home;
