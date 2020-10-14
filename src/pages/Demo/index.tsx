
import Head from 'next/head'

import { Maybe } from 'src/modules/gql/generated';


export type T = Maybe<number>

// console.log('useCommentsConnectionQuery', useCommentsConnectionQuery);
console.log('Maybe');

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
