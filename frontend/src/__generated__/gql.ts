/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation Login ($password: String!, $email: String, $username: String) {\n    tokenAuth(password: $password, email: $email, username: $username) {\n      token\n      errors\n      success\n    }\n  }\n": types.LoginDocument,
    "\n  query Projects {\n    projects {\n      id\n      title\n    }\n  }\n": types.ProjectsDocument,
    "\n  query Project($id: String!) {\n    project(id: $id) {\n      id\n      title\n      description\n      startTime\n      createTime\n      polygon {\n        type\n        coordinates\n      }\n    }\n  }\n": types.ProjectDocument,
    "\n  mutation Register($email: String!, $username: String!, $password1: String!, $password2: String!) {\n    register(email: $email, username: $username, password1: $password1, password2: $password2) {\n      success\n      errors\n      token\n      refreshToken\n    }\n  }\n": types.RegisterDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login ($password: String!, $email: String, $username: String) {\n    tokenAuth(password: $password, email: $email, username: $username) {\n      token\n      errors\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation Login ($password: String!, $email: String, $username: String) {\n    tokenAuth(password: $password, email: $email, username: $username) {\n      token\n      errors\n      success\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Projects {\n    projects {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query Projects {\n    projects {\n      id\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Project($id: String!) {\n    project(id: $id) {\n      id\n      title\n      description\n      startTime\n      createTime\n      polygon {\n        type\n        coordinates\n      }\n    }\n  }\n"): (typeof documents)["\n  query Project($id: String!) {\n    project(id: $id) {\n      id\n      title\n      description\n      startTime\n      createTime\n      polygon {\n        type\n        coordinates\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Register($email: String!, $username: String!, $password1: String!, $password2: String!) {\n    register(email: $email, username: $username, password1: $password1, password2: $password2) {\n      success\n      errors\n      token\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation Register($email: String!, $username: String!, $password1: String!, $password2: String!) {\n    register(email: $email, username: $username, password1: $password1, password2: $password2) {\n      success\n      errors\n      token\n      refreshToken\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;