const networkConfig = {
    4: {
        name: "rinkeby",
        linkToken: "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
        keyHash: "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311",
        vrfCoordinator: "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B",
        fee: "100000000000000000",
    },
    31337: {
        name: "localhost",
        fee: "100000000000000000",
        keyHash: "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311",
        linkToken: "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
        vrfCoordinator: "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B",
    }
}

// It should be wise to add the real chainlink address for the Mainnet

module.exports = {
    networkConfig
}

