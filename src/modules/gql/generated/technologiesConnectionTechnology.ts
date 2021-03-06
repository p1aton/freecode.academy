/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TechnologiesConnectionUserFragment } from './technologiesConnectionUser';
import { TechnologiesConnectionUserTechnologyFragment } from './technologiesConnectionUserTechnology';
import { gql } from '@apollo/client';
import { TechnologiesConnectionUserFragmentDoc } from './technologiesConnectionUser';
import { TechnologiesConnectionUserTechnologyFragmentDoc } from './technologiesConnectionUserTechnology';
export type TechnologiesConnectionTechnologyFragment = { __typename?: 'Technology', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name?: Types.Maybe<string>, components?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, contentText?: Types.Maybe<string>, site_url?: Types.Maybe<string>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & TechnologiesConnectionUserFragment
  )>, UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology', CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & TechnologiesConnectionUserFragment
    )> }
    & TechnologiesConnectionUserTechnologyFragment
  )>> };

export const TechnologiesConnectionTechnologyFragmentDoc = gql`
    fragment technologiesConnectionTechnology on Technology {
  id
  createdAt
  updatedAt
  name
  components
  contentText
  site_url
  CreatedBy {
    ...technologiesConnectionUser
  }
  UserTechnologies {
    ...technologiesConnectionUserTechnology
    CreatedBy {
      ...technologiesConnectionUser
    }
  }
}
    ${TechnologiesConnectionUserFragmentDoc}
${TechnologiesConnectionUserTechnologyFragmentDoc}`;