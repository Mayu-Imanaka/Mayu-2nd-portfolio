import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'

type PageContext = {
  next: {
    blogsId: string
    title: string
  }  | null
  previous: {
    blogsId: string
    title: string
  } | null
}

export default function BlogPage({
  data,
  pageContext: { next, previous },
  location
}: PageProps<Queries.BlogPageQuery, PageContext>){
  const { microcmsBlogs } = data
  return (
    <main>
      <h1>{microcmsBlogs?.title}</h1>
      <div dangerouslySetInnerHTML={{__html: microcmsBlogs?.content ?? '' }} />
      <ul>
        {next && (
        <li>
          次へ:
          <Link to={`/blog/${next.blogsId}`}>{next.title}</Link>
        </li>
        )}
        {previous && (
          <li>
            前へ:
              <Link to={`/blog/${previous.blogsId}/`}>{previous.title}</Link>
          </li>
        )}
      </ul>
    </main>
  )
}

export const query = graphql`
  query BlogPage($id: String!) {
    microcmsBlogs(blogsId: { eq: $id }) {
      blogsId
      title
      content
      publishedAt
    }
  }
`
