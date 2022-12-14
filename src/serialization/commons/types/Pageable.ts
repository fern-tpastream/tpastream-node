/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpaStreamApi } from "../../..";
import * as core from "../../../core";

export const Pageable: core.schemas.ObjectSchema<Pageable.Raw, TpaStreamApi.commons.Pageable> = core.schemas.object({
  hasNext: core.schemas.property("has_next", core.schemas.boolean()),
  hasPrev: core.schemas.property("has_prev", core.schemas.boolean()),
  nextNum: core.schemas.property("next_num", core.schemas.number().optional()),
  page: core.schemas.number().optional(),
  pages: core.schemas.number().optional(),
  perPage: core.schemas.property("per_page", core.schemas.number().optional()),
  prevNum: core.schemas.property("prev_num", core.schemas.number().optional()),
  total: core.schemas.number().optional(),
});

export declare namespace Pageable {
  interface Raw {
    has_next: boolean;
    has_prev: boolean;
    next_num?: number | null;
    page?: number | null;
    pages?: number | null;
    per_page?: number | null;
    prev_num?: number | null;
    total?: number | null;
  }
}
