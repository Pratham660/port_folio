import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, slug } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <img src={`../../featured/${slug}.png`} alt="featured_img" style={{maxWidth:"100%"}}/>
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        slug
      }
    }
  }
`
