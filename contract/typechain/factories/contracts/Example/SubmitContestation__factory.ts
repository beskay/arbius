/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SubmitContestation,
  SubmitContestationInterface,
} from "../../../contracts/Example/SubmitContestation";

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
    name: "submitContestation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007357601f61016b38819003918201601f19168301916001600160401b038311848410176100785780849260209460405283398101031261007357516001600160a01b0381169081900361007357600080546001600160a01b03191691909117905560405160dc908161008f8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080806040526004361015601257600080fd5b600090813560e01c63671f815214602857600080fd5b3460a257602036600319011260a257815482906001600160a01b0316803b1560a25760248383819363338fc0a960e11b835260043560048401525af180156097576070575080f35b6001600160401b03811160835760405280f35b634e487b7160e01b82526041600452602482fd5b6040513d84823e3d90fd5b5080fdfea2646970667358221220dc0e823d6a9ea1822097ff32db44265f43b973170c1af6a2931e63b7acc569f164736f6c63430008130033";

type SubmitContestationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubmitContestationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubmitContestation__factory extends ContractFactory {
  constructor(...args: SubmitContestationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _arbius: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SubmitContestation> {
    return super.deploy(
      _arbius,
      overrides || {}
    ) as Promise<SubmitContestation>;
  }
  override getDeployTransaction(
    _arbius: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_arbius, overrides || {});
  }
  override attach(address: string): SubmitContestation {
    return super.attach(address) as SubmitContestation;
  }
  override connect(signer: Signer): SubmitContestation__factory {
    return super.connect(signer) as SubmitContestation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubmitContestationInterface {
    return new utils.Interface(_abi) as SubmitContestationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubmitContestation {
    return new Contract(address, _abi, signerOrProvider) as SubmitContestation;
  }
}
