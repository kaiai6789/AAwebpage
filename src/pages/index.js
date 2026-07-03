import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Welcome to AAwebpage</h1>
      <p>This site is built with Gatsby and deployed via GitHub Pages.</p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>AAwebpage</title>
