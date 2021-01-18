/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { Task_Fragment } from './task_';
import { TimersConnectionTimerFragment } from './timersConnectionTimer';
import { gql } from '@apollo/client';
import { Task_FragmentDoc } from './task_';
import { TimersConnectionTimerFragmentDoc } from './timersConnectionTimer';
import * as Apollo from '@apollo/client';
export type TaskQueryVariables = Types.Exact<{
  where: Types.TaskWhereUniqueInput;
  timersWhere?: Types.Maybe<Types.TimerWhereInput>;
}>;


export type TaskQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'Task', Timers?: Types.Maybe<Array<(
      { __typename?: 'Timer' }
      & TimersConnectionTimerFragment
    )>> }
    & Task_Fragment
  )> };


export const TaskDocument = gql`
    query task($where: TaskWhereUniqueInput!, $timersWhere: TimerWhereInput) {
  object: task(where: $where) {
    ...task_
    Timers(orderBy: createdAt_DESC, where: $timersWhere) {
      ...timersConnectionTimer
    }
  }
}
    ${Task_FragmentDoc}
${TimersConnectionTimerFragmentDoc}`;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      where: // value for 'where'
 *      timersWhere: // value for 'timersWhere'
 *   },
 * });
 */
export function useTaskQuery(baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables>) {
        return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, baseOptions);
      }
export function useTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, baseOptions);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;