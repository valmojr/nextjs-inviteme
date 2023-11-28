import type {Config} from 'jest';

const config: Config = {
    verbose: false,
    collectCoverage: true,
    extensionsToTreatAsEsm: ['.ts'],
};

export default config;