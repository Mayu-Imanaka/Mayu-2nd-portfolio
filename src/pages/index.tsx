import * as React from "react"
import { graphql, Link, HeadFC, PageProps } from "gatsby"
import { formatDate } from '../utils/date'


// const IndexPage: React.FC<PageProps> = ({data}) => {
  export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  const { allMicrocmsBlogs } = data
  return (
    <main>
     <ul>
      {allMicrocmsBlogs.nodes.map(node => (
        <li key={node.blogsId}>
          <Link to={`/blogs/${node.blogsId}/`}>
          {node.title}【公開日：{formatDate(node.publishedAt!)}】
          </Link>
        </li>
      ))}
     </ul>
     <Link to="/blogs/">もっとみる</Link>
    </main>
  )
}

export const query = graphql`
  query IndexPage {
    allMicrocmsBlogs(limit: 3, sort: { order : DESC, fields: publishedAt }) {
      nodes {
        blogsId
        title
        publishedAt
        revisedAt
      }
    }
  }
`

export const Head: HeadFC = () => <title>Home Page</title>
