import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div style={{ position: "relative" }}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <div className="content-homeCard">
              <div className="homeCard fancy-hover">
                <div>
                  <img className="homeCard-img" src="/img/core.webp" />
                </div>
                <h2 className="homeCard-title">Panda Intro - 5m ⏱️</h2>
                <p>Lets begin your environment</p>
                <a class="link" href="/docs/intro">
                  GO !
                </a>
              </div>
              <div className="homeCard fancy-hover">
                <div>
                  <img className="homeCard-img" src="/img/plus.webp" />
                </div>
                <h2 className="homeCard-title">Panda Plus - 10m ⏱️</h2>
                <p>Build your SaaS with all core features</p>
                <a class="link" href="/docs/category/-tutorial---plus">
                  GO !
                </a>
              </div>
              <div className="homeCard fancy-hover">
                <div>
                  <img
                    className="homeCard-img"
                    style={{ width: "72px" }}
                    src="/img/firebase.png"
                  />
                </div>
                <h2 className="homeCard-title">Panda Firebase - 20m ⏱️</h2>
                <p>Build your SaaS with Next.js and Firebase</p>
                <a class="link" href="/docs/category/-tutorial---firebase">
                  GO !
                </a>
              </div>
              <div className="homeCard fancy-hover">
                <div>
                  <img className="homeCard-img" src="/img/stripe.png" />
                </div>
                <h2 className="homeCard-title">Panda Stripe - 30m ⏱️</h2>
                <p>Build your SaaS with Firebase and Stripe</p>
                <a class="link" href="/docs/category/-tutorial---stripe">
                  GO !
                </a>
              </div>
              <div className="homeCard fancy-hover">
                <h2 className="homeCard-title">Panda CMS</h2>
                <a class="link" href="javascript:void(0)">
                  Soon...
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div className="container-footer">
          <div>
            <div>
              <div style={{ marginRight: "2rem" }}>
                {" "}
                <a href="">
                  <img src="/img/logo.webp" style={{ width: "30px" }} />{" "}
                </a>
              </div>
              <div style={{ marginRight: "2rem" }}>
                {" "}
                <a href="https://twitter.com/docusaurus">
                  <img src="/img/twitter.svg" style={{ width: "30px" }} />{" "}
                </a>
              </div>
              <div style={{ marginRight: "2rem" }}>
                {" "}
                <a href="https://github.com/facebook/docusaurus">
                  <img src="/img/github.png" style={{ width: "30px" }} />{" "}
                </a>
              </div>
              <div style={{ marginRight: "2rem" }}>
                {" "}
                <a href="https://discordapp.com/invite/docusaurus">
                  <img src="/img/discord.svg" style={{ width: "30px" }} />{" "}
                </a>
              </div>
            </div>
            <div>
              <div style={{ marginRight: "2rem" }}>
                <a href="javascript:void(0)">Partnership</a>{" "}
              </div>
              <div style={{ marginRight: "2rem" }}>
                <a href="javascript:void(0)">Licence</a>
              </div>
              <div style={{ marginRight: "2rem" }}>
                <a href="javascript:void(0)">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
