/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  VeNFTRender,
  VeNFTRenderInterface,
} from "../../../contracts/ve/VeNFTRender";

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
] as const;

const _bytecode =
  "0x60808060405234610016576111ec908161001c8239f35b600080fdfe604060808152600436101561001357600080fd5b60003560e01c63f6ad4c971461002857600080fd5b34610abe5760a0366003190112610abe5760043590610048606435610db3565b91929694610055906110dc565b9361005f906110dc565b96610069906110dc565b92610073906110dc565b9061007d906110dc565b91610087906110dc565b9286519788956020870161009a91610b12565b6100a390610b29565b6100ac91610b12565b6100b590610b29565b6100be91610b12565b600160fd1b81526001016100d191610b12565b6100da90610b36565b6100e391610b12565b6100ec90610b36565b6100f591610b12565b632055544360e01b81526004010392601f199384810182526101179082610b59565b610120826110dc565b61012b608435611033565b91610137602435611033565b610142604435611033565b86517f3c3f786d6c2076657273696f6e3d22312e302220656e636f64696e673d22555460208201526523169c111f9f60d11b6040820152948594919391604686017f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323081527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d22302030203335302033353060408201527f223e3c7374796c653e2e6c6f676f207b2066696c6c3a2077686974653b20666f60608201527f6e742d66616d696c793a2027436f7572696572204e6577272c206d6f6e6f7370608082018190527f6163653b20666f6e742d73697a653a203670783b2077686974652d737061636560a08301527f3a207072653b207d202e62617365207b2066696c6c3a2077686974653b20666f60c083015260e08201527f6163653b20666f6e742d73697a653a203870783b206261636b67726f756e643a6101008201527f207768697465207d3c2f7374796c653e3c726563742077696474683d223130306101208201527f2522206865696768743d2231303025222066696c6c3d22626c61636b22202f3e6101408201527f3c7465787420783d2231302220793d2232302220636c6173733d226c6f676f2261016082015275103c36b61d39b830b1b29e91383932b9b2b93b32911f60511b610180820152610196017f202020202020202020202020202020202020202020202424242424245c20202481527a012121212122e1012122e10101012122e10101212121212122e101602d1b6020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2233302220636c61737381526000805160206111978339815191526020820152603d017f202020202020202020202020202020202020202020242420205f5f24245c205c81527a02f921210102fbe1212103e10101212103e121210102faf92122e1602d1b6020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2234302220636c61737381526000805160206111978339815191526020820152603d017f24245c2020202024245c20202424242424245c20202424202f20202424207c2081527a080909081f08080909081f08080909081f0909080bc8081717d7df602a1b6020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2235302220636c61737381526000805160206111978339815191526020820152603d017f5c24245c2020242420207c242420205f5f24245c202424242424242424207c2081527a0101212103e10101212103e10101212103e2e1212121212122e101602d1b6020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2236302220636c61737381526000805160206111978339815191526020820152603d017f205c24245c242420202f202424242424242424207c242420205f5f2424207c2081527a0101212103e10101212103e10101212103e102e2fafafaf92122e1602d1b6020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2237302220636c61737381526000805160206111978339815191526020820152603d017f20205c24242420202f202024242020205f5f5f5f7c2424207c20202424207c2081527a080909081f08080909081f08080909081f0909170808080909081f602a1b6020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2238302220636c61737381526000805160206111978339815191526020820152603d017f2020205c2420202f2020205c242424242424245c202424207c20202424207c2481527a090909090917081709090909090908081f1709090909090908081f602a1b6020820152603b017f3c2f746578743e3c7465787420783d2231302220793d2239302220636c61737381526000805160206111978339815191526020820152603d017f202020205c5f2f20202020205c5f5f5f5f5f5f5f7c5c5f5f7c20205c5f5f7c5c81527a02fafafafafafbe102e2fafafafafaf9790102e2fafafafafaf979602d1b6020820152603b017f3c2f746578743e3c7465787420783d2232302220793d223133302220636c6173815268399e913130b9b2911f60b91b60208201526029016902a37b5b2b71024a21d160b51b8152600a0161078b91610b12565b7f3c2f746578743e3c7465787420783d2232302220793d223135302220636c6173815268399e913130b9b2911f60b91b60208201526029016d02a37ba30b61029ba30b5b2b21d160951b8152600e016107e391610b12565b7f3c2f746578743e3c7465787420783d2232302220793d223137302220636c6173815268399e913130b9b2911f60b91b602082015260290169022b732102230ba329d160b51b8152600a0161083791610b12565b7f3c2f746578743e3c7465787420783d2232302220793d223139302220636c6173815268399e913130b9b2911f60b91b602082015260290171023b7bb32b93730b731b2902837bbb2b91d160751b815260120161089391610b12565b7f3c2f746578743e3c7465787420783d2232302220793d223231302220636c6173815268399e913130b9b2911f60b91b602082015260290170024b734ba34b0b6102130b630b731b29d1607d1b81526011016108ee91610b12565b661e17ba32bc3a1f60c91b8152600701651e17b9bb339f60d11b815260060103848101825261091d9082610b59565b61092690610cbd565b82517919185d184e9a5b5859d94bdcdd99cade1b5b0ed8985cd94d8d0b60321b602082015291908290603a820161095c91610b12565b03848101835261096c9083610b59565b610975906110dc565b8251707b226e616d65223a22766541495553202360781b6020820152918291603183016109a191610b12565b6b1116101134b6b0b3b2911d1160a11b8152600c016109bf91610b12565b7f222c20226465736372697074696f6e223a202254686973204e4654207265707281527f6573656e7473206c6f636b65642024414955532e20497420726563656976657360208201527f20746f6b656e20656d697373696f6e7320616e642063616e206265207573656460408201527120666f7220676f7665726e616e63652e227d60701b6060820152607201038381018252610a5c9082610b59565b610a6590610cbd565b81517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000602082015292908390603d8201610a9e91610b12565b039081018352610aae9083610b59565b51610aba819282610ae6565b0390f35b600080fd5b60005b838110610ad65750506000910152565b8181015183820152602001610ac6565b60409160208252610b068151809281602086015260208686019101610ac3565b601f01601f1916010190565b90610b2560209282815194859201610ac3565b0190565b602d60f81b815260010190565b601d60f91b815260010190565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b03821190821017610b7c57604052565b610b43565b6001600160401b038111610b7c57601f01601f191660200190565b60405190602082016001600160401b03811183821017610b7c5760405260008252565b60405190606082016001600160401b03811183821017610b7c57604052604082527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f6040837f4142434445464748494a4b4c4d4e4f505152535455565758595a61626364656660208201520152565b634e487b7160e01b600052601160045260246000fd5b9060028201809211610c5257565b610c2e565b9060208201809211610c5257565b6030019081603011610c5257565b600281901b91906001600160fe1b03811603610c5257565b90610c9582610b81565b610ca26040519182610b59565b8281528092610cb3601f1991610b81565b0190602036910137565b805115610da757610ccc610bbf565b610ce8610ce3610cdc8451610c44565b6003900490565b610c73565b91610cfa610cf584610c57565b610c8b565b92835280815182019060208501935b828210610d4b57505050600390510680600114610d3a57600214610d2b575090565b603d60f81b6000199091015290565b50613d3d60f01b6001199091015290565b90919360049060038094019384516001603f81818460121c16880101519260f893841b8652828282600c1c1689010151841b8387015282828260061c1689010151841b60028701521686010151901b9082015201939190610d09565b50610db0610b9c565b90565b90620151809081830462010bd99060008282019283129112908015821691151617610c5257610de190610ecc565b90610e1c610dfa610df184610f7b565b62023ab1900590565b92610e16610e0f610e0a86610f8c565b610eeb565b6004900590565b9061101a565b92610eb3610e55610e50610e43610e3a610e3589610f08565b610f9f565b62164b09900590565b96610e16610e0f89610fb1565b610f25565b610eae610e83610e6f610e6784610fc3565b61098f900590565b92610e16610e7c85610fd4565b6050900590565b96610eae610ea9610ea3610e9a600b870596610f42565b610e1687610fe6565b98611008565b610ff7565b610f5f565b939293940690610e10808304920690603c808304920690565b9062253d8c9160008382019384129112908015821691151617610c5257565b9060038201916000600384129112908015821691151617610c5257565b9060018201916000600184129112908015821691151617610c5257565b90601f8201916000601f84129112908015821691151617610c5257565b9060028201916000600284129112908015821691151617610c5257565b91909160008382019384129112908015821691151617610c5257565b908160021b916004830503610c5257565b9062023ab19180830292830503610c5257565b90610fa09180830292830503610c5257565b906105b59180830292830503610c5257565b9081605002916050830503610c5257565b9061098f9180830292830503610c5257565b9081600c0291600c830503610c5257565b9081606402916064830503610c5257565b906030198201918213600116610c5257565b81810392916000138015828513169184121617610c5257565b610db0602161105e655af3107a4000670de0b6b3a76400006110568187046110dc565b9506046110dc565b926040519381611078869351809260208087019101610ac3565b8201601760f91b60208201526110978251809360208785019101610ac3565b01036001810184520182610b59565b600019810191908211610c5257565b9081518110156110c6570160200190565b634e487b7160e01b600052603260045260246000fd5b8015611168576000818181805b61114c57506110f781610c8b565b935b6111035750505090565b61110c906110a6565b90600a90611137611127611121848406610c65565b60ff1690565b60f81b6001600160f81b03191690565b841a61114384876110b5565b530490816110f9565b91506000198114610c52576001600a91019104808492916110e9565b50604080519081016001600160401b03811182821017610b7c5760405260018152600360fc1b60208201529056fe3d226c6f676f2220786d6c3a73706163653d227072657365727665223e000000a2646970667358221220313289d079cb401cb8005a1466068744e244bc90351a646cc04fcd398196a32464736f6c63430008130033";

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

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VeNFTRender> {
    return super.deploy(overrides || {}) as Promise<VeNFTRender>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VeNFTRender {
    return super.attach(address) as VeNFTRender;
  }
  override connect(signer: Signer): VeNFTRender__factory {
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
