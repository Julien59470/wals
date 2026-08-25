export const legalIdentity = {
  name: process.env.LEGAL_ENTITY_NAME?.trim() || null,
  legalForm: process.env.LEGAL_ENTITY_FORM?.trim() || null,
  capital: process.env.LEGAL_ENTITY_CAPITAL?.trim() || null,
  address: process.env.LEGAL_ENTITY_ADDRESS?.trim() || null,
  siren: process.env.LEGAL_ENTITY_SIREN?.trim() || null,
  rcs: process.env.LEGAL_ENTITY_RCS?.trim() || null,
  vat: process.env.LEGAL_ENTITY_VAT?.trim() || null,
  hostName: process.env.LEGAL_HOST_NAME?.trim() || null,
  hostAddress: process.env.LEGAL_HOST_ADDRESS?.trim() || null,
  hostPhone: process.env.LEGAL_HOST_PHONE?.trim() || null,
};
