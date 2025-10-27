import next from "eslint-config-next";

const config = [
  ...next,
  {
    ignores: [
      ".open-next/**",
      ".wrangler/**",
      "cloudflare-env.d.ts",
    ],
  },
];

export default config;
