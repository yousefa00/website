import Head from "next/head";
import React, { useState, useEffect } from "react";
import { greetings } from "../public/greetings";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import "babel-polyfill";
import "../public/styles/home.scss";

export default function Home() {
  const [greetingVis, setGreetingVis] = useState(false);
  const greetingDelay = 2200;

  useEffect(() => {
    setTimeout(setGreetingVis, greetingDelay, true);
  }, []);

  const particlesParam = {
    particles: {
      number: {
        value: 100,
      },
      size: {
        value: 3,
      },
      color: "rgba(0, 0, 0, 1)",
      line_linked: {
        enable: true,
        color: "rgba(0, 0, 0, 1)",
        opacity: 0.3,
      },
    },
  };

  return (
    <div className="container">
      <Head>
        <title>Yousef Ahmed</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"></meta>
      </Head>

      <div className="background">
        <Particles className="particles" params={particlesParam} />
      </div>

      <main>
        <h1 className="title">
          {greetingVis && (
            <span className="greeting">
              <TextLoop delay={2200} mask>
                {greetings.map((greeting) => (
                  <span key={greeting}>{greeting}</span>
                ))}
              </TextLoop>
              {"! "}
            </span>
          )}
          <span className="wave" role="img" aria-label="wave">
            👋
          </span>
        </h1>
      </main>

      <footer>Created by Yousef - 2020</footer>
    </div>
  );
}
