/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpaStreamApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const Account: core.schemas.ObjectSchema<Account.Raw, TpaStreamApi.employer.Account> = core.schemas.object({
  accounts: core.schemas.lazyObject(() => serializers.employer.Accounts),
  address: core.schemas.string().optional(),
  alegeusKey: core.schemas.property("alegeus_key", core.schemas.string().optional()),
  archived: core.schemas.boolean(),
  archivedDate: core.schemas.property("archived_date", core.schemas.date()),
  archivedby: core.schemas.string(),
  canMakeClaimRequests: core.schemas.property("can_make_claim_requests", core.schemas.boolean().optional()),
});

export declare namespace Account {
  interface Raw {
    accounts: serializers.employer.Accounts.Raw;
    address?: string | null;
    alegeus_key?: string | null;
    archived: boolean;
    archived_date: string;
    archivedby: string;
    can_make_claim_requests?: boolean | null;
  }
}