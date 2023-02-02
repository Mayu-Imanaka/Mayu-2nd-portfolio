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
    </main>
  )
}

// export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
