/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = require("batchw-common-config/jest-common").createConfig(
    "bonito-core",
    {
        setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup-tests.ts"],
    }
);
