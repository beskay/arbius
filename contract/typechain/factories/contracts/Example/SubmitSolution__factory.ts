/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SubmitSolution,
  SubmitSolutionInterface,
} from "../../../contracts/Example/SubmitSolution";

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
        name: "_commitment",
        type: "bytes32",
      },
    ],
    name: "signalCommitment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_taskid",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_cid",
        type: "bytes",
      },
    ],
    name: "submitSolution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007457601f6102d738819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b03191691909117905560405161024790816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060409080825260048036101561001657600080fd5b600091823560e01c908163506ea7de1461018657506356914caf1461003a57600080fd5b346101825782600319360112610182576024926001600160401b03843581811161017e573660238201121561017e57808401359082821161016c57835191601f199384603f81601f85011601168401908482109082111761015857855280835236888284010111610154578791818892602094859301838701378401015285546001600160a01b031696873b156101545784908151966356914caf60e01b8852803590880152860152815191826044870152865b83811061014057505050849584866064828296601f878585859a86010152011681010301925af190811561013757506101245750f35b61012d906101e8565b6101345780f35b80fd5b513d84823e3d90fd5b8181018301518782016064015282016100ee565b8680fd5b88604188634e487b7160e01b600052526000fd5b634e487b7160e01b8652604185528686fd5b8480fd5b5080fd5b8390858285346101825760203660031901126101825781546001600160a01b031690813b156101e4578483819360249363283753ef60e11b84528035908401525af190811561013757506101d8575080f35b6101e1906101e8565b80f35b8280fd5b6001600160401b0381116101fb57604052565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220886de8baff418bdaffad2199b9e39b7e9814bbd79ba3544478e1f1a10f7d4ca864736f6c63430008130033";

type SubmitSolutionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubmitSolutionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubmitSolution__factory extends ContractFactory {
  constructor(...args: SubmitSolutionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _arbius: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SubmitSolution> {
    return super.deploy(_arbius, overrides || {}) as Promise<SubmitSolution>;
  }
  override getDeployTransaction(
    _arbius: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_arbius, overrides || {});
  }
  override attach(address: string): SubmitSolution {
    return super.attach(address) as SubmitSolution;
  }
  override connect(signer: Signer): SubmitSolution__factory {
    return super.connect(signer) as SubmitSolution__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubmitSolutionInterface {
    return new utils.Interface(_abi) as SubmitSolutionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubmitSolution {
    return new Contract(address, _abi, signerOrProvider) as SubmitSolution;
  }
}
