const errorScope = {
    platform: 15000,
}

const errorsLibrary = {
    UNAUTHORIZED: 0,
    OK: 1,
    MULTISIG_ADDED: 3,
    UNDEFINED: 0xDEFDEFDEF,
    OBJECT_ACCESS_DENIED_CONTRACT_OWNER_ONLY: 8,

    PLATFORM_PROXY_ALREADY_EXISTS: errorScope.platform + 0,
    PLATFORM_CANNOT_APPLY_TO_ONESELF: errorScope.platform + 1,
    PLATFORM_INVALID_VALUE: errorScope.platform + 2,
    PLATFORM_INSUFFICIENT_BALANCE: errorScope.platform + 3,
    PLATFORM_NOT_ENOUGH_ALLOWANCE: errorScope.platform + 4,
    PLATFORM_ASSET_ALREADY_ISSUED: errorScope.platform + 5,
    PLATFORM_CANNOT_ISSUE_FIXED_ASSET_WITH_INVALID_VALUE: errorScope.platform + 6,
    PLATFORM_CANNOT_REISSUE_FIXED_ASSET: errorScope.platform + 7,
    PLATFORM_SUPPLY_OVERFLOW: errorScope.platform + 8,
    PLATFORM_NOT_ENOUGH_TOKENS: errorScope.platform + 9,
    PLATFORM_INVALID_NEW_OWNER: errorScope.platform + 10,
    PLATFORM_ALREADY_TRUSTED: errorScope.platform + 11,
    PLATFORM_SHOULD_RECOVER_TO_NEW_ADDRESS: errorScope.platform + 12,
    PLATFORM_ASSET_IS_NOT_ISSUED: errorScope.platform + 13,
    PLATFORM_INVALID_INVOCATION: errorScope.platform + 17
}

module.exports = errorsLibrary
