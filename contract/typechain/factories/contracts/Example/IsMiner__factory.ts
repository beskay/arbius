/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  IsMiner,
  IsMinerInterface,
} from "../../../contracts/Example/IsMiner";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "engine_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "engine",
    outputs: [
      {
        internalType: "contract IArbius",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr_",
        type: "address",
      },
    ],
    name: "isMiner",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007457601f6102d038819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b03191691909117905560405161024090816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c908163701b70ac14610062575063c9d4623f1461003857600080fd5b3461005e578160031936011261005e57905490516001600160a01b039091168152602090f35b5080fd5b8284346101ce576020928360031936011261005e576001600160a01b039060043582811691908290036101a4578284541691631f4a58fb60e31b82526004820152606081602481855afa9283156101c457908691859461013e575b50506004925191855193848092632258d10560e01b82525afa918215610134578392610101575b50106100f8575060ff6001915b5191168152f35b60ff90916100f1565b9091508481813d831161012d575b61011981836101d1565b81010312610129575190856100e4565b8280fd5b503d61010f565b84513d85823e3d90fd5b91509192506060823d82116101bc575b8161015b606093836101d1565b810103126101a457845191606083016001600160401b038111848210176101a857865280518352868101518784015285015190811681036101a4578482015290846004876100bd565b8380fd5b634e487b7160e01b86526041600452602486fd5b3d915061014e565b85513d86823e3d90fd5b80fd5b601f909101601f19168101906001600160401b038211908210176101f457604052565b634e487b7160e01b600052604160045260246000fdfea264697066735822122000b457f95fd787328af432bdb5aa205fc71421bcadb0a528210fad267417cf0a64736f6c63430008130033";

type IsMinerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IsMinerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IsMiner__factory extends ContractFactory {
  constructor(...args: IsMinerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    engine_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IsMiner> {
    return super.deploy(engine_, overrides || {}) as Promise<IsMiner>;
  }
  override getDeployTransaction(
    engine_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(engine_, overrides || {});
  }
  override attach(address: string): IsMiner {
    return super.attach(address) as IsMiner;
  }
  override connect(signer: Signer): IsMiner__factory {
    return super.connect(signer) as IsMiner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IsMinerInterface {
    return new utils.Interface(_abi) as IsMinerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IsMiner {
    return new Contract(address, _abi, signerOrProvider) as IsMiner;
  }
}
