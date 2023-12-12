import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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
                  fontWeight: "bold",
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
                }}
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/faceRecognition img.jpg"
          alt="Face Recognition image"
          width={521}
          height={597}
          style={{
            height: "90vh",
            marginLeft: "150px",
            display: "inline-block",
          }}
        />
        <div
          id="siteInfo"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60px",
            opacity: 0.7,
          }}
        >
          <h2>
            This Website can detect your emotion <br />
            and based on your emotion it will play <br />
            songs that will match your mood.
          </h2>
          <div id="version" style={{ marginTop: "auto", textAlign: "center" }}>
            <h5>Version 2.3.3</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
