const CAVAssetProxy = artifacts.require("./CAVAssetProxy.sol");
const CAVPlatform = artifacts.require("./CAVPlatform.sol");

module.exports = async (deployer, network) => {
    deployer.then(async () => {
        const SYMBOL = 'CAV';
        const NAME = 'Caviar';
        const DESCRIPTION = 'Caviar Token';

        const BASE_UNIT = 18;
        const IS_REISSUABLE = false;
        const TOTAL_SUPPLY = web3.toBigNumber(375000000).mul(web3.toBigNumber(10).pow(18));

        let platform = await CAVPlatform.deployed();
        await platform.issueAsset(SYMBOL, TOTAL_SUPPLY, NAME, DESCRIPTION, BASE_UNIT, IS_REISSUABLE);

        await deployer.deploy(CAVAssetProxy);

        let proxy = await CAVAssetProxy.deployed();
        await proxy.init(CAVPlatform.address, SYMBOL, NAME);

        await platform.setProxy(proxy.address, SYMBOL);

        console.log("[MIGRATION] CAVAssetProxy deploy: #done")
    })
}
