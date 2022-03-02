import React from "react";
import Tarot from "./Tarot.js"

const Dev = () => {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Software Development</h1>
            <h2 class="subtitle">subtitle</h2>
          </div>
        </div>
      </section>
      <div className="columns">
        <div className="column is-half">My Strengths</div>
        <div className="column is-half">Projects/Resources</div>
      </div>
      <div>Feature Examples
          <Tarot />
      </div>
    </div>
  );
};

export default Dev;
