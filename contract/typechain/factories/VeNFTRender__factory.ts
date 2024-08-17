/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VeNFTRender, VeNFTRenderInterface } from "../VeNFTRender";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_balanceOf",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_veStakingBal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_locked_end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "_tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "output",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60808060405234610016576111ec908161001c8239f35b600080fdfe604060808152600436101561001357600080fd5b60003560e01c63f6ad4c971461002857600080fd5b34610ad55760a0366003190112610ad55760043590610048606435610db2565b91929694610055906110db565b9361005f906110db565b96610069906110db565b92610073906110db565b9061007d906110db565b91610087906110db565b9286519788956020870161009a91610b29565b602d60f81b81526001016100ad91610b29565b602d60f81b81526001016100c091610b29565b600160fd1b81526001016100d391610b29565b601d60f91b81526001016100e691610b29565b601d60f91b81526001016100f991610b29565b632055544360e01b81526004010392601f1993848101825261011b9082610b56565b610124826110db565b61012f608435611032565b9161013b602435611032565b610146604435611032565b86517f3c3f786d6c2076657273696f6e3d22312e302220656e636f64696e673d22555460208201526523169c111f9f60d11b6040820152948594919391604686017f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323081527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d22302030203335302033353060408201527f223e3c7374796c653e2e6c6f676f207b2066696c6c3a2077686974653b20666f60608201527f6e742d66616d696c793a2027436f7572696572204e6577272c206d6f6e6f7370608082018190527f6163653b20666f6e742d73697a653a203670783b2077686974652d737061636560a08301527f3a207072653b207d202e62617365207b2066696c6c3a2077686974653b20666f60c083015260e08201527f6163653b20666f6e742d73697a653a203870783b206261636b67726f756e643a6101008201527f207768697465207d3c2f7374796c653e3c726563742077696474683d223130306101208201527f2522206865696768743d2231303025222066696c6c3d22626c61636b22202f3e6101408201527f3c7465787420783d2231302220793d2232302220636c6173733d226c6f676f2261016082015275103c36b61d39b830b1b29e91383932b9b2b93b32911f60511b610180820152610196017f202020202020202020202020202020202020202020202424242424245c20202481527f24242424245c2024245c20202024245c20202424242424245c202000000000006020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2233302220636c61737381526000805160206111978339815191526020820152603d017f202020202020202020202020202020202020202020242420205f5f24245c205c81527f5f242420205f7c2424207c20202424207c242420205f5f24245c2000000000006020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2234302220636c61737381526000805160206111978339815191526020820152603d017f24245c2020202024245c20202424242424245c20202424202f20202424207c2081527f202424207c20202424207c20202424207c2424202f20205c5f5f7c00000000006020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2235302220636c61737381526000805160206111978339815191526020820152603d017f5c24245c2020242420207c242420205f5f24245c202424242424242424207c2081527f202424207c20202424207c20202424207c5c2424242424245c202000000000006020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2236302220636c61737381526000805160206111978339815191526020820152603d017f205c24245c242420202f202424242424242424207c242420205f5f2424207c2081527f202424207c20202424207c20202424207c205c5f5f5f5f24245c2000000000006020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2237302220636c61737381526000805160206111978339815191526020820152603d017f20205c24242420202f202024242020205f5f5f5f7c2424207c20202424207c2081527f202424207c20202424207c20202424207c24245c2020202424207c00000000006020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2238302220636c61737381526000805160206111978339815191526020820152603d017f2020205c2420202f2020205c242424242424245c202424207c20202424207c2481527f24242424245c205c24242424242420207c5c24242424242420207c00000000006020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2239302220636c61737381526000805160206111978339815191526020820152603d017f202020205c5f2f20202020205c5f5f5f5f5f5f5f7c5c5f5f7c20205c5f5f7c5c81527f5f5f5f5f5f5f7c205c5f5f5f5f5f5f2f20205c5f5f5f5f5f5f2f2000000000006020820152603b017f3c2f746578743e3c7465787420783d2232302220793d223133302220636c6173815268399e913130b9b2911f60b91b60208201526029016902a37b5b2b71024a21d160b51b8152600a0161079f91610b29565b7f3c2f746578743e3c7465787420783d2232302220793d223135302220636c6173815268399e913130b9b2911f60b91b60208201526029016d02a37ba30b61029ba30b5b2b21d160951b8152600e016107f791610b29565b7f3c2f746578743e3c7465787420783d2232302220793d223137302220636c6173815268399e913130b9b2911f60b91b602082015260290169022b732102230ba329d160b51b8152600a0161084b91610b29565b7f3c2f746578743e3c7465787420783d2232302220793d223139302220636c6173815268399e913130b9b2911f60b91b602082015260290171023b7bb32b93730b731b2902837bbb2b91d160751b81526012016108a791610b29565b7f3c2f746578743e3c7465787420783d2232302220793d223231302220636c6173815268399e913130b9b2911f60b91b602082015260290170024b734ba34b0b6102130b630b731b29d1607d1b815260110161090291610b29565b661e17ba32bc3a1f60c91b8152600701651e17b9bb339f60d11b81526006010384810182526109319082610b56565b61093a90610cbc565b82517f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000602082015291908290603a820161097391610b29565b0384810183526109839083610b56565b61098c906110db565b8251707b226e616d65223a22766541495553202360781b6020820152918291603183016109b891610b29565b6b1116101134b6b0b3b2911d1160a11b8152600c016109d691610b29565b7f222c20226465736372697074696f6e223a202254686973204e4654207265707281527f6573656e7473206c6f636b65642024414955532e20497420726563656976657360208201527f20746f6b656e20656d697373696f6e7320616e642063616e206265207573656460408201527120666f7220676f7665726e616e63652e227d60701b6060820152607201038381018252610a739082610b56565b610a7c90610cbc565b81517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000602082015292908390603d8201610ab591610b29565b039081018352610ac59083610b56565b51610ad1819282610afd565b0390f35b600080fd5b60005b838110610aed5750506000910152565b8181015183820152602001610add565b60409160208252610b1d8151809281602086015260208686019101610ada565b601f01601f1916010190565b90610b3c60209282815194859201610ada565b0190565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610b7857604052565b610b40565b67ffffffffffffffff8111610b7857601f01601f191660200190565b604051906020820182811067ffffffffffffffff821117610b785760405260008252565b604051906060820182811067ffffffffffffffff821117610b7857604052604082527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f6040837f4142434445464748494a4b4c4d4e4f505152535455565758595a61626364656660208201520152565b634e487b7160e01b600052601160045260246000fd5b9060028201809211610c5157565b610c2d565b9060208201809211610c5157565b6030019081603011610c5157565b600281901b91906001600160fe1b03811603610c5157565b90610c9482610b7d565b610ca16040519182610b56565b8281528092610cb2601f1991610b7d565b0190602036910137565b805115610da657610ccb610bbd565b610ce7610ce2610cdb8451610c43565b6003900490565b610c72565b91610cf9610cf484610c56565b610c8a565b92835280815182019060208501935b828210610d4a57505050600390510680600114610d3957600214610d2a575090565b603d60f81b6000199091015290565b50613d3d60f01b6001199091015290565b90919360049060038094019384516001603f81818460121c16880101519260f893841b8652828282600c1c1689010151841b8387015282828260061c1689010151841b60028701521686010151901b9082015201939190610d08565b50610daf610b99565b90565b90620151809081830462010bd99060008282019283129112908015821691151617610c5157610de090610ecb565b90610e1b610df9610df084610f7a565b62023ab1900590565b92610e15610e0e610e0986610f8b565b610eea565b6004900590565b90611019565b92610eb2610e54610e4f610e42610e39610e3489610f07565b610f9e565b62164b09900590565b96610e15610e0e89610fb0565b610f24565b610ead610e82610e6e610e6684610fc2565b61098f900590565b92610e15610e7b85610fd3565b6050900590565b96610ead610ea8610ea2610e99600b870596610f41565b610e1587610fe5565b98611007565b610ff6565b610f5e565b939293940690610e10808304920690603c808304920690565b9062253d8c9160008382019384129112908015821691151617610c5157565b9060038201916000600384129112908015821691151617610c5157565b9060018201916000600184129112908015821691151617610c5157565b90601f8201916000601f84129112908015821691151617610c5157565b9060028201916000600284129112908015821691151617610c5157565b91909160008382019384129112908015821691151617610c5157565b908160021b916004830503610c5157565b9062023ab19180830292830503610c5157565b90610fa09180830292830503610c5157565b906105b59180830292830503610c5157565b9081605002916050830503610c5157565b9061098f9180830292830503610c5157565b9081600c0291600c830503610c5157565b9081606402916064830503610c5157565b906030198201918213600116610c5157565b81810392916000138015828513169184121617610c5157565b610daf602161105d655af3107a4000670de0b6b3a76400006110558187046110db565b9506046110db565b926040519381611077869351809260208087019101610ada565b8201601760f91b60208201526110968251809360208785019101610ada565b01036001810184520182610b56565b600019810191908211610c5157565b9081518110156110c5570160200190565b634e487b7160e01b600052603260045260246000fd5b8015611167576000818181805b61114b57506110f681610c8a565b935b6111025750505090565b61110b906110a5565b90600a90611136611126611120848406610c64565b60ff1690565b60f81b6001600160f81b03191690565b841a61114284876110b4565b530490816110f8565b91506000198114610c51576001600a91019104808492916110e8565b506040516040810181811067ffffffffffffffff821117610b785760405260018152600360fc1b60208201529056fe3d226c6f676f2220786d6c3a73706163653d227072657365727665223e000000a26469706673582212208422fff40c7f4f96e7bf6d20af1601a9bcb576b033e76e14c333b43ad868f36064736f6c63430008130033";

type VeNFTRenderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VeNFTRenderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VeNFTRender__factory extends ContractFactory {
  constructor(...args: VeNFTRenderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VeNFTRender> {
    return super.deploy(overrides || {}) as Promise<VeNFTRender>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VeNFTRender {
    return super.attach(address) as VeNFTRender;
  }
  connect(signer: Signer): VeNFTRender__factory {
    return super.connect(signer) as VeNFTRender__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VeNFTRenderInterface {
    return new utils.Interface(_abi) as VeNFTRenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VeNFTRender {
    return new Contract(address, _abi, signerOrProvider) as VeNFTRender;
  }
}
