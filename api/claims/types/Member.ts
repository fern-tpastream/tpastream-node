/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpaStreamApi } from "../../..";

export interface Member {
  email?: string;
  employer: TpaStreamApi.claims.Employer;
  firstName?: string;
  id: number;
  lastName?: string;
  systemKey: Record<string, string>;
}
