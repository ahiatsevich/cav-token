var CAVPlatform = artifacts.require("./CAVPlatform.sol");

module.exports = async (deployer, network) => {
    deployer.then(async () => {
        await deployer.deploy(CAVPlatform);
        let platform = await CAVPlatform.deployed();
        await platform.setupEventsHistory(CAVPlatform.address);
        
        console.log("[MIGRATION] CAVPlatform deploy: #done")
    })
}
