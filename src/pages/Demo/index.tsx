import { useRouter } from 'next/router'
import Head from 'next/head'

import { GetServerSideProps } from 'next'

import { initializeApollo } from 'src/lib/apolloClient'

import CommentsList, { ALL_POSTS_QUERY, allPostsQueryVars } from './CommentsList'

export const Home = (): JSX.Element => {
  const router = useRouter()

  const {
    query: { skip, first },
  } = router

  return (
    <div className="container">
      <Head>
        <title>Next-js with typescript server</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next-js test page" />
      </Head>

      <main>
        <CommentsList
          variables={{
            skip: skip && typeof skip === 'string' ? parseInt(skip) : undefined,
            first:
              first && typeof first === 'string' ? parseInt(first) : undefined,
          }}
        />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { skip, first } = context.query

  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: {
      ...allPostsQueryVars,
      skip:
        skip && typeof skip === 'string'
          ? parseInt(skip)
          : allPostsQueryVars.skip,
      first:
        first && typeof first === 'string'
          ? parseInt(first)
          : allPostsQueryVars.first,
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export { ALL_POSTS_QUERY, allPostsQueryVars }
