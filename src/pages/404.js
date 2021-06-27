import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/404.module.css"

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.fof}>
        <div>
          <div>
            <h1>&ensp;Error 404</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}
