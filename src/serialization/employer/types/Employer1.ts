/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpaStreamApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const Employer1: core.schemas.ObjectSchema<Employer1.Raw, TpaStreamApi.employer.Employer1> = core.schemas.object(
  {
    archived: core.schemas.boolean().optional(),
    eligiblePayers: core.schemas.property(
      "eligible_payers",
      core.schemas.list(core.schemas.lazyObject(() => serializers.employer.Payer)).optional()
    ),
    emailAutomation: core.schemas.property("email_automation", core.schemas.boolean().optional()),
    employerId: core.schemas.property("employer_id", core.schemas.number().optional()),
    id: core.schemas.number().optional(),
    name: core.schemas.string(),
    payers: core.schemas.list(core.schemas.lazyObject(() => serializers.employer.Payer1)),
    slug: core.schemas.string().optional(),
    supportEmailDerived: core.schemas.property("support_email_derived", core.schemas.string().optional()),
    supportPhoneDerived: core.schemas.property("support_phone_derived", core.schemas.string().optional()),
    supportLogoDerived: core.schemas.property("support_logo_derived", core.schemas.string().optional()),
    supportNameDerived: core.schemas.property("support_name_derived", core.schemas.string().optional()),
  }
);

export declare namespace Employer1 {
  interface Raw {
    archived?: boolean | null;
    eligible_payers?: serializers.employer.Payer.Raw[] | null;
    email_automation?: boolean | null;
    employer_id?: number | null;
    id?: number | null;
    name: string;
    payers: serializers.employer.Payer1.Raw[];
    slug?: string | null;
    support_email_derived?: string | null;
    support_phone_derived?: string | null;
    support_logo_derived?: string | null;
    support_name_derived?: string | null;
  }
}