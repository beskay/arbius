/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ClaimSolution,
  ClaimSolutionInterface,
} from "../../../contracts/Example/ClaimSolution";

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
        internalType: "bytes32",
        name: "_taskid",
        type: "bytes32",
      },
    ],
    name: "claimSolution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007357601f61016b38819003918201601f19168301916001600160401b038311848410176100785780849260209460405283398101031261007357516001600160a01b0381169081900361007357600080546001600160a01b03191691909117905560405160dc908161008f8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080806040526004361015601257600080fd5b600090813560e01c6377286d1714602857600080fd5b3460a257602036600319011260a257815482906001600160a01b0316803b1560a2576024838381936377286d1760e01b835260043560048401525af180156097576070575080f35b6001600160401b03811160835760405280f35b634e487b7160e01b82526041600452602482fd5b6040513d84823e3d90fd5b5080fdfea2646970667358221220622b96e8c823087921d280bbb8a4b776c830bd65852f3afbf57da7629f37382e64736f6c63430008130033";

type ClaimSolutionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClaimSolutionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClaimSolution__factory extends ContractFactory {
  constructor(...args: ClaimSolutionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _arbius: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ClaimSolution> {
    return super.deploy(_arbius, overrides || {}) as Promise<ClaimSolution>;
  }
  override getDeployTransaction(
    _arbius: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_arbius, overrides || {});
  }
  override attach(address: string): ClaimSolution {
    return super.attach(address) as ClaimSolution;
  }
  override connect(signer: Signer): ClaimSolution__factory {
    return super.connect(signer) as ClaimSolution__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimSolutionInterface {
    return new utils.Interface(_abi) as ClaimSolutionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimSolution {
    return new Contract(address, _abi, signerOrProvider) as ClaimSolution;
  }
}
