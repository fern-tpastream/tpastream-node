/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpaStreamApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const AllAccounts: core.schemas.ObjectSchema<AllAccounts.Raw, TpaStreamApi.employer.AllAccounts> = core.schemas
  .object({
    data: core.schemas.lazyObject(() => serializers.employer.Account),
  })
  .extend(core.schemas.lazyObject(() => serializers.commons.Pageable));

export declare namespace AllAccounts {
  interface Raw extends serializers.commons.Pageable.Raw {
    data: serializers.employer.Account.Raw;
  }
}