require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note magic assume hockey kite army giggle'; 
let testAccounts = [
"0xbadd5be25954b84ad8b8af3b945045a5f7a30fc3c0956c3a7635b2401b5f8f70",
"0x27ecaa1de8ecdcc41ecf6a8bceb6c1e8f17d40123bfff687df75a262f24d17cf",
"0x4900a62193eab2014eb1ec3e1c8da0c441dfd875ba60d0f16039bc141f992179",
"0x93e4514f686f437e1f7ec888d74ad439d5f6c69b3786a31ec64aca9682cf3eb3",
"0x32efe46263519b683070dde2a9e9386ccc52467f43e77d916cf626f98b6e64a3",
"0x917c83aa92d44dd2d8bf45671e22c6f6d2968f28b8d26a11ed3283c504ee95ec",
"0xcd7bfe1fbf7ef9892b4d2b5e120ee0f529c6b19b4a028abc9650103895351212",
"0xfe2ab652e55bf40a5b7ed76983033f0415b5fefc8f6eb302c51fb983ff3f247f",
"0x92a5c00807e7c57b9c399ffdeb794c76c38f5d74f86c28cccca162fef835518d",
"0x2159075555e9d847cbd5c162d0ca5472bb5851edd8c5b4db813c49609ff0d5c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

