import { graphql, PageProps, navigate, Link} from 'gatsby'
import React from 'react'
import { formatDate } from '../utils/date'

type PageContext = {
  limit: number
  offset:number
  totalCount: number
  currentPageNum: number
  totalPagesCount: number
}

export default function BlogsPage({
  data,
  pageContext: {limit, offset, totalCount, currentPageNum, totalPagesCount},
  location
}: PageProps<Queries.BlogsPageQuery, PageContext>){
  const { allMicrocmsBlogs } = data
  return(
    <main>
      <h1>ブログ一覧</h1>
      
    </main>
  )
}