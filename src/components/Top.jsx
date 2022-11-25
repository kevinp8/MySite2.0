import React from "react";
import me from "./imgs/me.jpg";

function Top() {
  return (
    <main>
      <div>
        <img src={me} alt="me" />
      </div>
      <div>
        <h1>Kevin Pham</h1>
        <h2>Software Engineer</h2>
        <h2>Full Stack Developer</h2>
      </div>
    </main>
  );
}

export default Top;
