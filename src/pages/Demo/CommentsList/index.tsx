import { NetworkStatus } from '@apollo/client'
import ErrorMessage from '../ErrorMessage'
import { CommentsListProps } from './interfaces'
import {
  CommentsConnectionDocument as ALL_POSTS_QUERY,
  useCommentsConnectionQuery,
  CommentsConnectionCommentFragment,
} from 'src/modules/gql/generated'

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
}

export const CommentsList: React.FC<CommentsListProps> = (props) => {
  const { variables } = props

  const { loading, error, data, networkStatus } = useCommentsConnectionQuery({
    variables: {
      ...allPostsQueryVars,
      ...variables,
    },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  })

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  // const loadMorePosts = () => {
  //   fetchMore({
  //     variables: {
  //       // skip: allPosts.length,
  //       skip: 5,
  //     },
  //   })
  // }


  if (error) {
    console.error('CommentsList loading error', error)
    return <ErrorMessage message="Error loading posts." />
  }

  if (loading && !loadingMorePosts) {
    return <div>Loading</div>
  }


  // Filter issue: https://github.com/microsoft/TypeScript/issues/41090
  // const nodes: CommentsConnectionCommentFragment[] = (data?.commentsConnection.edges.map((edge) => edge?.node) || [])
  //   .filter(n => !!n)

  const nodes: CommentsConnectionCommentFragment[] = (data?.commentsConnection?.edges.map((edge) => edge?.node) ?? [])
    .reduce((curr, next) => {
      if (next) {
        curr.push(next);
      }
      return curr;
    }, [] as CommentsConnectionCommentFragment[]);

  console.log('nodes', nodes);

  // const comments = nodes.map((n) => {


  // }) ?? [];

  // const areMorePosts = _allPostsMeta?.count && allPosts.length < _allPostsMeta?.count

  return (
    <section>
      <ul id="posts">
        {/* {allPosts.map((post: any, index: number) => (
          <li key={post.id} className="post">
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
            </div>
          </li>
        ))} */}
      </ul>
      {/* {areMorePosts && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )} */}
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  )
}

export { ALL_POSTS_QUERY }

export default CommentsList
