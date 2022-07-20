/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserProfileDetailOutput {
  /** @format uuid */
  uuid?: string;
  full_name: string;

  /** @format email */
  email: string;
  language?: string;
  memberships?: Memberships[];
}

export interface Memberships {
  organization_id: string;
  organization_name: string;
}
