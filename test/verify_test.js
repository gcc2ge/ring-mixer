const ethers = require("ethers")
const Wallet = ethers.Wallet
const providers = ethers.providers
const path = require("path")
const fs = require("fs")

const deploy = require("../scripts/deploy.js")

const init = async() => {
	let ringVerify = await deploy.deploy()
	let provider = ringVerify.provider
	let signer = ringVerify.signer

	// let tx = await ringVerify.hash(77)
	// console.log(tx)
	// let receipt = await provider.getTransactionReceipt(tx.hash)
	// console.log(receipt)

	let abi = new ethers.utils.AbiCoder()
	let _sig = "0x0000000000000011c1099d20b4f0982bae795735b02dd145b1c51477902941640fbd7a044bea499c9ef3f2ea2270e2cedae5da88413f285d0344c12ee76958d697daae3f7e6e127f0e880f92cf3d74def48789ce1f42b1fa615c9780b6308d7d7b2bb0e2a27725a739a52ede5600457ea4f430b081a2f6c61a679d8520b8228b5eb20cdb87b3e9d274dee4e544c7a3ea8b4fdf64d0a8513ee5d73eb3026fb0b06c60caffb231e248619163fee3827783246c6cee2d92e6c6f70bd44ce0265d18c3111b7bbae431fa3ace377d8e92e7bd73b6f3affc0b4aef24c659e596c20e2904a11248ed22d07bd8a997b15b78c11bcb492de08c4c6b959dc683ffe2d008cc9c82fb3e0943faa7d4f789bda1ea1df3c5a8fc9291926caf79698514a4e908d64ff7212d63e099bddb7d0e8051321d46a7c5f7287869e43cc0cc1d71defabbaf7a33007a70d543c5842c8e35f0547064e7578058e64507b3ad0aa441fc42bbfc208af3dd5ce9ecf4fba3f162822be82795152f83cd11aff1ec976aae4bd17cbaab383ba05ae0155a2c7bfd110a5ab419ae68ee91ae59da1d5c68b374837b7ada6f56f3154ac2b23ed6c60e5a6c391399abfa736274d385aa22f887de9645270ff22a70acf01d36e95be13d1f5e0ab2594c308429d0837eb6be728dcd6f52de6d5dac1c205327291752681ed27a7ef6892685cb8afdac1b5ef8c9438b10d810009fa2575f762f1586d629616b9904922e82fcfea81bcf1991e7c9411c656230c629ffff21a739461e0b44617e3333b5c9a6bbf36326db34fb5ac6861a16d1b1507a7e5323f601374dfbfb678927fd4d1012c801f54d78e50fac688ec41607ef98749bbda486fb34859c2b1c37f48ce44e5132e01a4bc29e86073f003b5db177bbf8cfe12d20422c577441b3047c9affd80e1698da2dd3a54658dbbb5bac1ed9b384a3846964a92b3a8eba82286e842bb0d910f4ddb557dda80cdd4ca13c0e6ce3d441ed85a842008210add4e97b19c9dd8fe0d1145a64d5357e5dce76ff546d65cd83895e1d9212735b0618020d159887de042eca425a320f9c9728feff34380835d6f17e54fd34e7883e1450d9c3068eac73f7e9f136521db8ce351fba4a1739a3cbeb6800172621c862d8ef12104586bc5fd0c9ad23c5f23da32ce99c4daac4112369f84412e069a895c1dce90393bfd8ec2f0c09658f560f345223d49a7110253427a9cfc48c81a33600f4d4cf4417f47b7851b4da09129773dfe6a82f00d16a5411f10016b95266c1ebde9e75d452f411475ad82e3c451bbaf4cdebc373ec9472cb63340ce4e301448fd42f4facc6633296018d9d6a673fd70bc8e21f7899f4bdf46286a1105be2f14f08ec2135a061f673340dd2fab0e8246347a5ebad2c5855850cd403ce98117429293af7b080da5736cc832efe2cd1e7aaa0ef8094b6dd1b0e3698e8219a664aef9785b0525370422040280039817fa1053e2192c564da48971d4af20465f5b0bdf5f3526c33c13f31ed677c24c56a50311bac6429002ca5204a2127db95748e40a1fd002f363ce145a16fd6cf436f00631a939e289ab55b386c81278478cb290b7b0cc3f0516812b7e913b6e9f7ff2677eb2530faf293830cb6eec113c2c07529a77a8cf0db97ee7a20cff9b714d88004bf5cb25e66d6a902477186d12d46c62e3438a85bb07cab197c663dac9e88e0fb56bbd80d89681a43e5cbcb2a9b0ce4eaf4cf11c4f2f2a4837744a8564f57ed0a41ac4224d5a16bc2effa42d28fabd4633597a916377c87bd40b56ad9cea0cdcf47f9f849fa15f19f45efe1622638478a1d6c812edbba9ae44124b7e781a376e48e3e76d31cd9951425d65d4bfd9ad72cc9e80ecd204a3089990c88830e837b8b746179c0cbfaee97a84774dddef630f4037bdcf067d21d89c4f858f777e359725a5be8ba181974ee8b1d03de6c9596ac85df398f50754014e27e598a8896b515974d0975c383d773ab6eb48fc871abf2092be277f5e4bee5cf978c6035540ef7333563524d8181169ae8880b7048eeb80bee1def608fde8bd62b9d053f0db2d441b664fc3ddd156c256486e74b191bce9b68d6aa795e6f3a6253c0ce6357c665856027318e82d865b3e8302c5135442d7c3652bfef050b30d10ae3b0278a5772976770f8c2e08a11da7c91c944af1b5278e9e44bb9dc0aa8341cb6c11dc7a4b636a6133479417af49615b96bb78176fef2a802474165f02aa9225de31193d9a9793a16ed220b6d314f2a8dd4f23627ef1fd7084a529b56a16779c89d99e07a721d4d1818e1db758d0c9563d48b25604bd99fae8fb8364de3480574000a4f8b31432c891464710c93c7f581993d53092aeac95419f93455388f604609d77b2a0390aec981e6212ad813fdf48e8a"
	let data = abi.encode(["bytes"], [_sig])
	let tx = await ringVerify.verify(_sig)
	//console.log(tx)
	let txDone = await provider.waitForTransaction(tx.hash)
	let receipt = await provider.getTransactionReceipt(tx.hash)
	console.log(receipt)
	console.log(receipt.logs[0].topics)
	//console.log(receipt.logs[0].topics)
}

init()