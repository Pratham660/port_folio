import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
// import { GatsbyImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Pratham Agarwal</h2>
          <h3>Computer Science Student</h3>
          <p>
            Web Developer based in India{"  "}
            <span role="img" aria-label="comp">
              🖥️
            </span>
            <span role="img" aria-label="donut">
              🍩
            </span>
            <span role="img" aria-label="headphone">
              🎧
            </span>
            <span role="img" aria-label="bat">
              🏏
            </span>
          </p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        {/* <Img fluid={data.file.chilhdImageSharp.fluid }/> */}
        <img src="../coder.svg" alt="banner" style={{ maxWidth: "66%" }} />
        {/* <img src="../mesmall.jpg" alt="banner" style={{ maxWidth: "100%" }} /> */}
      </section>
    </Layout>
  )
}
