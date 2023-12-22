import type { Config } from 'jest';

const config: Config = {
	verbose: false,
	collectCoverage: true,
	extensionsToTreatAsEsm: ['.ts'],
	transformIgnorePatterns: ['/node_modules/'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest', // assuming TypeScript
		'^.+\\.jsx?$': 'babel-jest',
	},
};

export default config;
