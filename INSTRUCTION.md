# How to deploy CAV token [Windows OS]

First of all you have to have Ethereum account address with Ether on it.
If you have it then you should have wallet file. Copy and paste it into `secret.json`. Do not use default one which is commited right now. Do not share your wallet file and do not commit it in a public repo!

To correct/update an amount of token supply, number of digits after the point and other parameters go to `migrations/3_deploy_assetproxy.js`)

## Steps
1. Preparations:
    - Install **node** ([link here](https://nodejs.org/en/)). For Windows OS check out this [link](http://blog.teamtreehouse.com/install-node-js-npm-windows)
    - Install **git** (in case it doesn't installed yet) and checkout current repo [link](https://github.com/git-for-windows/git/releases/download/v2.16.2.windows.1/Git-2.16.2-64-bit.exe).
    - Check if .NET Framework 2.0 is installed ([check out this link](https://docs.microsoft.com/en-us/dotnet/framework/install/dotnet-35-windows-10))
    - run in [administrator cmd window](https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1/) the command `npm install --global --production windows-build-tools`
2. Go to the project directory (for Windows do `cd` to enter `cav-token` dir; you should see in command line something like `C:\Users\username\cav-token>`)
3. exec `npm install` inside the project directory
4. a. If you want to deploy the contract into test network (*Rinkeby*) then
    - execute `npm run win:console:rinkeby`
5. b. If you want to deploy the contract into main network (*Main*) then
    - execute `npm run win:console:main`
6. In appeared console input enter `migrate`. Now just waiting.
        Project directory now contains `build` folder with artifacts and info about deployed contracts
7. After migration step enter the next command: `CAVAssetProxy.address`. It will show the address of token. You could look at it either in [rinkeby](https://rinkeby.etherscan.io) (if you run console with `win:console:rinkeby`) or [main](https://etherscan.io) (if you run console with `win:console:main`) explorer.
8. Now you are able to send/receive tokens to other addresses.

## Afterwards
Continue working in opened console:
- to check your balance of this token `CAVAssetProxy.deployed().then(t => t.balanceOf.call("your address here"))`
- transfer tokens to other addresses `CAVAssetProxy.deployed().then(t => t.transfer("destination address", 1000)` where `1000` - number of tokens you want to send
