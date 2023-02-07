import { GatsbyNode } from 'gatsby'
import path from 'path'

export const createPage: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql<Queries.CreatePagesQuery>(`
  query CreatePages { 
    allMicrocmsBlogs(sort: { order: ASC, fields: publishedAt }) {
      edges {
        node {
          blogsId
        }
        next {
          blogsId
          title
        }
        previous {
          blogsId
          title
        }
      }
    }
  }
  `)

  if (result.errors){
    throw result.errors
  }

  const { allMicrocmsBlogs } = result.data!

  allMicrocmsBlogs.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.blogsId}/`,

      component: path.resolve('src/templates/blog.tsx'),

      context: {
        id: edge.node.blogsId,
        next:edge.next,
        previous: edge.previous
      }
    })
  })
}