import React from "react";
import Head from "next/head";

export default function application() {
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
                href="https://ai-music-player-360.netlify.app"
              >
                AI Player
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  fontWeight: "bold",
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
                }}
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="application"
        style={{ marginTop: "40px", marginLeft: "70px", opacity: 0.7 }}
      >
        <h1 style={{ marginLeft: "500px", textDecoration: "underline" }}>
          Applications
        </h1>
        <h3>
          1. It can be used in Cars, where the music will change along with the
          user's emotion.
        </h3>
        <br />
        <h3>
          2. In personal rooms, whenever you enter the room, the speaker plays
          the song that matches your mood.
        </h3>
        <br />
        <h2 style={{ marginLeft: "510px", textDecoration: "underline" }}>
          Future Updates
        </h2>

        <h3>
          1. When you feel asleep while driving in a car, then a loud alarm tone
          plays with the alarm's volume set to maximum to wake you up.
        </h3>
        <br />
        <h3>
          2. You will be able to replace the songs dynamically (upload songs on
          the website).
        </h3>
        <br />
        <h3>
          3. Users will be able to change the intervals dynamically (on the
          website), determining how long the program should wait before
          detecting the emotion and changing the song.
        </h3>
      </div>
    </div>
  );
}
