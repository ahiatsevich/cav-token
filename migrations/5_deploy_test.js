var Stub = artifacts.require("./Stub.sol");
var CAVPlatformTestable = artifacts.require("./CAVPlatformTestable.sol");

module.exports = async (deployer, network) => {
    deployer.then(async () => {
        await deployer.deploy(Stub);
        await deployer.deploy(CAVPlatformTestable);

        console.log("[MIGRATION] Test deploy: #done")
    })
}
