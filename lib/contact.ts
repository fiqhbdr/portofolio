// Web3Forms access key. Kept in the environment rather than the source because
// this repository is public, and a key committed here gets scraped. It still
// ends up in the browser bundle, since Web3Forms rejects server-side calls on
// the free plan, so the key is public by design; restricting it to this domain
// in the Web3Forms dashboard is what keeps it from being reused elsewhere.
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
