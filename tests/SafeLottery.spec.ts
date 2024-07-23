import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { SafeLottery } from '../wrappers/SafeLottery';
import '@ton/test-utils';

describe('SafeLottery', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let safeLottery: SandboxContract<SafeLottery>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        safeLottery = blockchain.openContract(await SafeLottery.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await safeLottery.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: safeLottery.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and safeLottery are ready to use
    });
});
