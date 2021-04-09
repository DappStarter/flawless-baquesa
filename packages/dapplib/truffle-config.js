require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain equip imitate private fresh search'; 
let testAccounts = [
"0xe65d3b8f507bec795a38e3aaffb7673c04b60d5020224b0d9e4c7a0411db1760",
"0x20d3550ba7202ac51bd154e72108ca6085877b2db55d9f8ee590d3da81e5547c",
"0x9c55f277e145ebb489e8b6097a5ed3df3334cab10afc8781b18acc5e4d22626b",
"0xea1912736049ec9de9c3570e53aefea1dd509b59b87f8d71d4890f5687864e7e",
"0x9912bda469295846c5f28e6af2a84ba9ca4ac2205c13fbf4aae64fbfdc925500",
"0x4821ba513e8574e64627bcb30cdaca510c1d2e68bc05c5efa13ba8fda119b1de",
"0x6a7d43044f9e5c092f1137e519f0a9dba644a5dafd3399f8a10d7993436e8c5d",
"0x54e21958cf4b97d696d79f1d004153f9fc5e43c061ec8c4e2ee54e56e0710e41",
"0xed9162fa1f633a1f3f8359cd2673f900e0df0e20a23b61e7f37587eb888b68c7",
"0xf8ef9e6e576acc9c7894b0db171ce5baf9d9d47b830bdbe3448b8ca43f126944"
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
            version: '^0.5.11'
        }
    }
};
