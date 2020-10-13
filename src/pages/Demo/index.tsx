
import Head from 'next/head'

import { useCommentsConnectionQuery } from 'src/modules/gql/generated';


console.log('useCommentsConnectionQuery', useCommentsConnectionQuery);

export const Home = (): JSX.Element => {

  return (
    <div className="container">
      <Head>
        <title>Next-js with typescript server</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next-js test page" />
      </Head>

      <main>
        Comments
      </main>
    </div>
  )
}
