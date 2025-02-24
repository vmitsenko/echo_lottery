import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/safe_lottery.tact',
    options: {
        debug: true,
        masterchain: true,
    },
};
