import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

export default function ComponentDetail({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <div className="l-container">
        <PageHeader
          title="Components"
          description="This is a list of all the components"
        />

        <ul className="c-card-list l-grid l-grid--3up">
          {posts
            .filter(post => post.node.frontmatter.group === 'components')
            .filter(post => post.node.frontmatter.subgroup)
            .map(({ node: post }) => {
              if (post.frontmatter.layout === 'component-category') {
                return (
                  <li className="l-grid__item" key={post.id}>
                    <Card
                      href={'/components/' + post.frontmatter.subgroup}
                      header={post.frontmatter.subgroup}
                      title={post.frontmatter.title}
                      description={post.frontmatter.description}
                      key={post.id}
                    />
                  </li>
                )
              }
              return null
            })}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ComponentQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            description
            path
            group
            subgroup
            layout
          }
        }
      }
    }
  }
`
