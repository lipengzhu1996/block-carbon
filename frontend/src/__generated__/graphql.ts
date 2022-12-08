/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUser>;
};


export type MutationCreateUserArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<UserType>>>;
};

export type UserType = {
  __typename?: 'UserType';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};
