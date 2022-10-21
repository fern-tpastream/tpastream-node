/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface Pageable {
  hasNext: boolean;
  hasPrev: boolean;
  nextNum?: number;
  page?: number;
  pages?: number;
  perPage?: number;
  prevNum?: number;
  total?: number;
}