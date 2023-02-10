import { GatsbyNode } from 'gatsby'
import path from 'path'
import { getPagesContext } from './src/utils/page'

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
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

  const { allMicrocmsBlogs: {totalCount, edges} } = result.data!

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

const pagesContext = getPagesContext({
  totalCount,
  limit: 10 //１ページあたり10コンテンツを表示させる
})

pagesContext.forEach((context) => {
  const component = path.resolve('src/templates/blogs.tsx')

  if(context.currentPageNum === 1){
    createPage({
      path: `/blogs/`,
      component,
      context
    })
    return
  }

  createPage({
    path: `/blogs/page/${context.currentPageNum}/`,
    component,
    context
  })
})
}