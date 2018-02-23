var CAVAsset = artifacts.require("./CAVAsset.sol");
const CAVAssetProxy = artifacts.require("./CAVAssetProxy.sol");

module.exports = async (deployer, network) => {
    deployer.then(async () => {
        await deployer.deploy(CAVAsset);

        let asset = await CAVAsset.deployed();
        await asset.init(CAVAssetProxy.address);

        let proxy = await CAVAssetProxy.deployed();
        await proxy.proposeUpgrade(asset.address);
        await proxy.commitUpgrade();


        console.log("[MIGRATION] CAVAsset deploy: #done")
    })
}
