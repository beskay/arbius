/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LookupValidatorStakedBalance,
  LookupValidatorStakedBalanceInterface,
} from "../../../contracts/Example/LookupValidatorStakedBalance";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IArbius",
        name: "_arbius",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
    ],
    name: "lookupLookupValidatorStakedBalance",
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
  "0x60803461007457601f61021038819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b03191691909117905560405161018090816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c63b7c176961461002b57600080fd5b34610146576020366003190112610146576001600160a01b03906004358281169081900361014257816024816060938689541690631f4a58fb60e31b835260048301525afa91821561013557849261008a575b60208484519051908152f35b60609250903d831161012d575b601f8301601f191681019267ffffffffffffffff9081851183861017610119578260609181010312610115576060840190811184821017610101578452805183526020808201519084015283015190811681036100fd576020935082820152388061007e565b8380fd5b634e487b7160e01b86526041600452602486fd5b8580fd5b634e487b7160e01b87526041600452602487fd5b3d9250610097565b50505051903d90823e3d90fd5b8480fd5b8280fdfea2646970667358221220205d96417e18ebf356072651407d9db4baef5b7c77432461d27f9a35c41278ba64736f6c63430008130033";

type LookupValidatorStakedBalanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LookupValidatorStakedBalanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LookupValidatorStakedBalance__factory extends ContractFactory {
  constructor(...args: LookupValidatorStakedBalanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _arbius: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LookupValidatorStakedBalance> {
    return super.deploy(
      _arbius,
      overrides || {}
    ) as Promise<LookupValidatorStakedBalance>;
  }
  override getDeployTransaction(
    _arbius: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_arbius, overrides || {});
  }
  override attach(address: string): LookupValidatorStakedBalance {
    return super.attach(address) as LookupValidatorStakedBalance;
  }
  override connect(signer: Signer): LookupValidatorStakedBalance__factory {
    return super.connect(signer) as LookupValidatorStakedBalance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LookupValidatorStakedBalanceInterface {
    return new utils.Interface(_abi) as LookupValidatorStakedBalanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LookupValidatorStakedBalance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LookupValidatorStakedBalance;
  }
}