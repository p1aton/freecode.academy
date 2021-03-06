/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type Resource_Fragment = { __typename?: 'Resource', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, type?: Types.Maybe<Types.ResourceType>, name: string, longtitle?: Types.Maybe<string>, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, components?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, published: boolean, deleted: boolean, hidemenu: boolean, uri: string, isfolder: boolean, rating?: Types.Maybe<number>, positiveVotesCount?: Types.Maybe<number>, negativeVotesCount?: Types.Maybe<number>, neutralVotesCount?: Types.Maybe<number>, CreatedBy: (
    { __typename?: 'User' }
    & UserNoNestingFragment
  ), Comments?: Types.Maybe<Array<{ __typename?: 'Resource', id: string, uri: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, CreatedBy: (
      { __typename?: 'User' }
      & UserNoNestingFragment
    ) }>>, Blog?: Types.Maybe<{ __typename?: 'Resource', id: string, name: string, longtitle?: Types.Maybe<string>, uri: string }>, Topic?: Types.Maybe<{ __typename?: 'Resource', id: string, name: string, longtitle?: Types.Maybe<string>, uri: string, type?: Types.Maybe<Types.ResourceType> }>, Tags?: Types.Maybe<Array<{ __typename?: 'ResourceTag', Tag: { __typename?: 'Tag', id: string, name: string } }>>, CodeChallenge?: Types.Maybe<{ __typename?: 'CodeChallenge', id: string, name?: Types.Maybe<string> }> };

export const Resource_FragmentDoc = gql`
    fragment resource_ on Resource {
  id
  createdAt
  updatedAt
  type
  name
  longtitle
  content
  components
  published
  deleted
  hidemenu
  uri
  isfolder
  rating
  positiveVotesCount
  negativeVotesCount
  neutralVotesCount
  CreatedBy {
    ...UserNoNesting
  }
  Comments(orderBy: id_ASC) {
    id
    uri
    createdAt
    updatedAt
    content
    CreatedBy {
      ...UserNoNesting
    }
  }
  Blog {
    id
    name
    longtitle
    uri
  }
  Topic {
    id
    name
    longtitle
    uri
    type
  }
  Tags {
    Tag {
      id
      name
    }
  }
  CodeChallenge {
    id
    name
  }
}
    ${UserNoNestingFragmentDoc}`;