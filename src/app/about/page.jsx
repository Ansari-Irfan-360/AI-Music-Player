import React from "react";
import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        style={{
          backgroundColor: "#95C8D8",
          padding: "15px 0",
        }}
      >
        <div style={{ width: "80%", margin: "0 auto", height: "35px" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
              padding: 0,
              height: "100%",
            }}
          >
            <li style={{ marginRight: "20px" }}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                }}
                href="/"
              >
                Home
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                }}
                href="https://ai-music-player-360.netlify.app/"
              >
                AI Player
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                }}
                href="/application"
              >
                Applications
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  fontWeight: "bold",
                }}
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="about" style={{ margin: "70px", opacity: 0.7 }}>
        <h2 style={{ marginLeft: "520px", textDecoration: "underline" }}>
          About
        </h2>
        <br />
        <h3>
          I have made this Website using HTML , CSS , Bootstrap , JavaScript ,
          Express.js & Models.
        </h3>
        <br />
        <br />
        <h3>I have used the following models for this Website :-</h3>
        <br />
        <h4>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1. Face Expression Model</h4>
        <h4>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2. Face Lankmark Model</h4>
        <h4>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3. Face Recognition Model</h4>
        <h4>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4. Tiny Face Detector Model</h4>
      </div>
    </div>
  );
}
