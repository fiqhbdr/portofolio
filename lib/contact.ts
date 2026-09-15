// Web3Forms access key. Kept in the environment rather than the source because
// this repository is public, and a key committed here gets scraped. It still
// ends up in the browser bundle, since Web3Forms rejects server-side calls on
// the free plan, so the key is public by design.
//
// Limiting the key to one domain would contain the damage, but that is a paid
// Web3Forms feature, so on the free plan the protection is the hCaptcha they
// verify for you plus their own spam filtering.
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
