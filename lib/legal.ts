const isVercelRuntime = process.env.VERCEL === "1";

const fallbackHost = isVercelRuntime
  ? {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      phone: "+1 559 288 7060",
    }
  : { name: null, address: null, phone: null };

const value = (name: string) => process.env[name]?.trim() || null;

export const legalIdentity = {
  name: value("LEGAL_ENTITY_NAME"),
  legalForm: value("LEGAL_ENTITY_FORM"),
  capital: value("LEGAL_ENTITY_CAPITAL"),
  address: value("LEGAL_ENTITY_ADDRESS"),
  siren: value("LEGAL_ENTITY_SIREN"),
  rcs: value("LEGAL_ENTITY_RCS"),
  rne: value("LEGAL_ENTITY_RNE"),
  vat: value("LEGAL_ENTITY_VAT"),
  contactPhone: value("LEGAL_CONTACT_PHONE"),
  publicationDirector: value("LEGAL_PUBLICATION_DIRECTOR"),
  hostName: value("LEGAL_HOST_NAME") || fallbackHost.name,
  hostAddress: value("LEGAL_HOST_ADDRESS") || fallbackHost.address,
  hostPhone: value("LEGAL_HOST_PHONE") || fallbackHost.phone,
};

export const legalIdentityReady = Boolean(
  legalIdentity.name &&
    legalIdentity.address &&
    legalIdentity.siren &&
    legalIdentity.contactPhone &&
    legalIdentity.publicationDirector &&
    legalIdentity.hostName &&
    legalIdentity.hostAddress &&
    legalIdentity.hostPhone,
);
