import { toNano } from '@ton/core';
import { SafeLottery } from '../wrappers/SafeLottery';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const safeLottery = provider.open(await SafeLottery.fromInit());

    await safeLottery.send(
        provider.sender(),
        {
            value: toNano('0.2'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(safeLottery.address);

    // run methods on `safeLottery`
}
