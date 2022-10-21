/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpaStreamApi } from "../../..";

export interface Claim {
  /** Use computed_amount_allowed in case this field is missing. */
  amountAllowed?: number;
  /** Use computed_amount_billed in case this field is missing. */
  amountBilled?: number;
  /** Use computed_amount_not_covered in case this field is missing. */
  amountNotCovered?: number;
  /** Use computed_amount_paid in case this field is missing. */
  amountPaid?: number;
  amountPaidOther?: number;
  checkDate?: string;
  checkNumber?: string;
  claimMedicalLines: TpaStreamApi.claims.ClaimLine[];
  /** Use computed_coinsurance_patient in case this field is missing. */
  coinsurancePatient?: number;
  computedAmountAllowed?: number;
  computedAmountBilled?: number;
  computedAmountPaid?: number;
  computedCoinsurancePatient?: number;
  computedCopayment?: number;
  computedPatientResponsibility?: number;
  computedReduction?: number;
  /** Use computed_copayment in case this field is missing. */
  copayment?: number;
  createddate?: Date;
  dataobjectId?: number;
  dateColumn?: Date;
  dateOfService?: TpaStreamApi.claims.DateRange;
  /** Use computed_discount in case this field is missing. */
  discount?: number;
  eobDate?: string;
  groupName?: string;
  groupNumber?: string;
  id?: number;
  incurredValue?: number;
  /** This claim may have incomplete data. If a claim is marked as incomplete, we typically will not send it until it gets marked as complete. Reasons for an incomplete claim include (1) documentation that isn't yet available but we expect it to be in the near future, and (2) if we notice the claim has data redacted for privacy (example: a dependent over 16 years old), but we expect to get this data when a dependent links their account. */
  isIncomplete: boolean;
  /** Used as an indicator of when the last substantial change happened to this claim. If this date gets updated, we consider it necessary to re-send the claim for processing (in data exports) / flag it as "unread" in TPA Stream / etc. Typically this date gets updated when the patient_responsibility or status changes, or otherwise when is_incomplete changes to True. */
  lastUpdatedStatus?: Date;
  members?: TpaStreamApi.claims.Member[];
  modifieddate?: Date;
  network?: TpaStreamApi.claims.Network;
  /** Patient Account Number for Service Provider (used for payments) */
  patientAccountNumber?: string;
  patientName?: string;
  /** Patient Account Number for Carrier */
  patientPayerNumber?: string;
  /** Use computed_patient_responsibility in case this field is missing. */
  patientResponsibility?: number;
  policyHolder: TpaStreamApi.claims.PolicyHolder;
  processedOn?: string;
  /** Attempt to recrawl when True */
  recrawlRequested?: boolean;
  /** This is the amount the deductible was reduced by. Most systems refer to this as 'deductible'. Use computed_reduction in case this field is empty. */
  reduction?: number;
  /** These are the notes for the Claim. */
  remarks?: string;
  /** Service Provider Name. This is the physical name, and is provided by the Payer. */
  serviceProvider?: string;
  /** Physical address of Service Provider */
  serviceProviderAddress?: string;
  serviceProviderBillingAddress?: string;
  /** This is the service_provider's Billing name, which is often different from their physical address name. */
  serviceProviderBillingName?: string;
  /** NPI Number of Billing Service Provider */
  serviceProviderBillingNpiNumber?: number;
  /** Federal Tax ID of Billing Service Provider */
  serviceProviderBillingNumber?: string;
  serviceProviderBillingPhone?: string;
  /** NPI Number of Service Provider */
  serviceProviderNpiNumber?: number;
  /** Federal Tax ID of Service Provider */
  serviceProviderNumber?: string;
  status?: TpaStreamApi.claims.ClaimStatus;
  type_?: TpaStreamApi.claims.ClaimType;
  uuid?: string;
  /** This field is unique for each Payer. Occasionally TPA Stream may append data to the end of this key to enforce uniqueness, such as the date_of_service, patient_responsibility, etc. */
  vendorSystemId?: string;
}
