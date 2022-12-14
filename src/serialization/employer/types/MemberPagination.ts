/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpaStreamApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const MemberPagination: core.schemas.ObjectSchema<MemberPagination.Raw, TpaStreamApi.employer.MemberPagination> =
  core.schemas
    .object({
      data: core.schemas.lazyObject(() => serializers.employer.Member),
    })
    .extend(core.schemas.lazyObject(() => serializers.commons.Pageable));

export declare namespace MemberPagination {
  interface Raw extends serializers.commons.Pageable.Raw {
    data: serializers.employer.Member.Raw;
  }
}
