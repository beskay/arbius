/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IVoterInterface extends utils.Interface {
  functions: {
    "_ve()": FunctionFragment;
    "attachTokenToGauge(uint256,address)": FunctionFragment;
    "detachTokenFromGauge(uint256,address)": FunctionFragment;
    "distribute(address)": FunctionFragment;
    "emergencyCouncil()": FunctionFragment;
    "emitDeposit(uint256,address,uint256)": FunctionFragment;
    "emitWithdraw(uint256,address,uint256)": FunctionFragment;
    "governor()": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "notifyRewardAmount(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "attachTokenToGauge",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "detachTokenFromGauge",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "distribute", values: [string]): string;
  encodeFunctionData(
    functionFragment: "emergencyCouncil",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emitDeposit",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitWithdraw",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "attachTokenToGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "detachTokenFromGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyCouncil",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IVoter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVoterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _ve(overrides?: CallOverrides): Promise<[string]>;

    attachTokenToGauge(
      _tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    detachTokenFromGauge(
      _tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distribute(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyCouncil(overrides?: CallOverrides): Promise<[string]>;

    emitDeposit(
      _tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emitWithdraw(
      _tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    isWhitelisted(token: string, overrides?: CallOverrides): Promise<[boolean]>;

    notifyRewardAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _ve(overrides?: CallOverrides): Promise<string>;

  attachTokenToGauge(
    _tokenId: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  detachTokenFromGauge(
    _tokenId: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distribute(
    _gauge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyCouncil(overrides?: CallOverrides): Promise<string>;

  emitDeposit(
    _tokenId: BigNumberish,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emitWithdraw(
    _tokenId: BigNumberish,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  governor(overrides?: CallOverrides): Promise<string>;

  isWhitelisted(token: string, overrides?: CallOverrides): Promise<boolean>;

  notifyRewardAmount(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _ve(overrides?: CallOverrides): Promise<string>;

    attachTokenToGauge(
      _tokenId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    detachTokenFromGauge(
      _tokenId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    distribute(_gauge: string, overrides?: CallOverrides): Promise<void>;

    emergencyCouncil(overrides?: CallOverrides): Promise<string>;

    emitDeposit(
      _tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emitWithdraw(
      _tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    governor(overrides?: CallOverrides): Promise<string>;

    isWhitelisted(token: string, overrides?: CallOverrides): Promise<boolean>;

    notifyRewardAmount(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _ve(overrides?: CallOverrides): Promise<BigNumber>;

    attachTokenToGauge(
      _tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    detachTokenFromGauge(
      _tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distribute(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyCouncil(overrides?: CallOverrides): Promise<BigNumber>;

    emitDeposit(
      _tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emitWithdraw(
      _tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    attachTokenToGauge(
      _tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    detachTokenFromGauge(
      _tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distribute(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyCouncil(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emitDeposit(
      _tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emitWithdraw(
      _tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isWhitelisted(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}