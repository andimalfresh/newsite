import React from "react";

const Intro = () => {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Introduction</h1>
            <h2 class="subtitle">Introduction subtitle</h2>
          </div>
        </div>
      </section>
      <div className="columns">
        <div className="column is-half">Who am I ?</div>
        <div className="column is-half">What I do.</div>
      </div>
    </div>
  );
};

export default Intro;
