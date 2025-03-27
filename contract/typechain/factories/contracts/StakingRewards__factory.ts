/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StakingRewards,
  StakingRewardsInterface,
} from "../../contracts/StakingRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "RewardsDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
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
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardForDuration",
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
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
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
  {
    inputs: [],
    name: "lastUpdateTime",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodFinish",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
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
  {
    inputs: [],
    name: "rewardPerTokenStored",
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
  {
    inputs: [],
    name: "rewardRate",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
  {
    inputs: [],
    name: "rewardsDuration",
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
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "_rewardsDuration",
        type: "uint256",
      },
    ],
    name: "setRewardsDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346100ca57601f61121038819003918201601f19168301916001600160401b038311848410176100cf5780849260409485528339810103126100ca57610052602061004b836100e5565b92016100e5565b60008054336001600160a01b0319808316821784556040519590946001600160a01b03949093859391908416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a362093a80600555168360015416176001551690600254161760025561111690816100fa8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100ca5756fe6040608081526004908136101561001557600080fd5b600091823560e01c80628cc26214610c015780630700037d14610bc957806318160ddd14610baa5780631c1f78eb14610b875780632e1a7d4d14610a9f578063386a952514610a805780633c6b16ab146108f95780633d18b9121461085457806370a082311461081c578063715018a6146107d157806372f702f3146107a85780637b0a47ee1461078b57806380faa57d1461076e5780638980f11f146106a05780638b876347146106685780638da5cb5b14610640578063a694fc3a146104f5578063c8f33c91146104d6578063cc1a378f146103f3578063cd3daf9d146103cf578063d1af0c7d146103a6578063df136d6514610387578063e9fad8ee14610209578063ebe2b12b146101e65763f2fde38b1461013357600080fd5b346101e25760203660031901126101e25761014c610c27565b90610155610c42565b6001600160a01b0391821692831561019057505082546001600160a01b0319811683178455166000805160206110a18339815191528380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b5050346102055781600319360112610205576020906003549051908152f35b5080fd5b50346101e257826003193601126101e2573383526020600b81528284205491610230610fca565b60075561023b610fb5565b6006553315159081610363575b831561032c575061025b83600a54610f1e565b600a55338552600b8252838520610273848254610f1e565b905560018060a01b039261028c81338660025416610f46565b84519081526000805160206110c1833981519152833392a26102ac610fca565b6007556102b7610fb5565b600655610308575b338452600981528284209284845494856102d7575080f35b600080516020611081833981519152946102f992879255339060015416610f46565b519283523392a2388080808480f35b6103113361102a565b338552600982528385205560075460088252838520556102bf565b845162461bcd60e51b81529081018390526011602482015270043616e6e6f74207769746864726177203607c1b6044820152606490fd5b61036c3361102a565b33875260098452858720556007546008845285872055610248565b5050346102055781600319360112610205576020906007549051908152f35b50503461020557816003193601126102055760015490516001600160a01b039091168152602090f35b5050346102055781600319360112610205576020906103ec610fca565b9051908152f35b5090346101e25760203660031901126101e257813591610411610c42565b60035442111561044d5750816020917ffb46ca5a5e06d4540d6387b930a7c978bce0db5f449ec6b3f5d07c6e1d44f2d39360055551908152a180f35b602060a492519162461bcd60e51b8352820152605860248201527f50726576696f7573207265776172647320706572696f64206d7573742062652060448201527f636f6d706c657465206265666f7265206368616e67696e672074686520647572606482015277185d1a5bdb88199bdc881d1a19481b995dc81c195c9a5bd960421b6084820152fd5b5050346102055781600319360112610205576020906006549051908152f35b50919034610205576020806003193601126101e257833591610515610fca565b600755610520610fb5565b6006553361061c575b82156105e85761053b83600a54610c9a565b600a55338452600b8252808420610553848254610c9a565b905560025481516323b872dd60e01b8482015233602482015230604482015260648082018690528152906001600160a01b031660a082016001600160401b038111838210176105d55783527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d9392916105cb91610cf6565b519283523392a280f35b634e487b7160e01b875260418852602487fd5b5162461bcd60e51b815280850191909152600e60248201526d043616e6e6f74207374616b6520360941b6044820152606490fd5b6106253361102a565b33855260098352818520556007546008835281852055610529565b505034610205578160031936011261020557905490516001600160a01b039091168152602090f35b5050346102055760203660031901126102055760209181906001600160a01b03610690610c27565b1681526008845220549051908152f35b508290346102055782600319360112610205576106bb610c27565b602435916106c7610c42565b6002546001600160a01b03838116929116821461072157507f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa2893946107118461071b933390610f46565b5192839283610f2b565b0390a180f35b608490602087519162461bcd60e51b8352820152602160248201527f43616e6e6f7420776974686472617720746865207374616b696e6720746f6b656044820152603760f91b6064820152fd5b5050346102055781600319360112610205576020906103ec610fb5565b50346101e257826003193601126101e25760209250549051908152f35b50503461020557816003193601126102055760025490516001600160a01b039091168152602090f35b83346108195780600319360112610819576107ea610c42565b80546001600160a01b03198116825581906001600160a01b03166000805160206110a18339815191528280a380f35b80fd5b5050346102055760203660031901126102055760209181906001600160a01b03610844610c27565b168152600b845220549051908152f35b50503461020557816003193601126102055761086e610fca565b600755610879610fb5565b600655336108d3575b338252600960205280822090828254928361089b575080f35b556001546108b590839033906001600160a01b0316610f46565b5190815260008051602061108183398151915260203392a238808280f35b6108dc3361102a565b338352600960205281832055600754600860205281832055610882565b5082903461020557602090816003193601126101e257602481359161091c610c42565b610924610fca565b60075561092f610fb5565b600655600354428111610a4e575061094960055484610f95565b81555b60015486516370a0823160e01b8152308382015292859184919082906001600160a01b03165afa918215610a44578592610a11575b5080546109916005548094610f95565b106109d35750936109c87fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d94954260065542610c9a565b60035551908152a180f35b855162461bcd60e51b815290810184905260186024820152770a0e4deecd2c8cac840e4caeec2e4c840e8dede40d0d2ced60431b6044820152606490fd5b9091508381813d8311610a3d575b610a298183610cbd565b81010312610a3957519086610981565b8480fd5b503d610a1f565b86513d87823e3d90fd5b610a70610a6a610a62610a79934290610f1e565b845490610f82565b85610c9a565b60055490610f95565b815561094c565b5050346102055781600319360112610205576020906005549051908152f35b5090346101e25760209081600319360112610b8357823592610abf610fca565b600755610aca610fb5565b60065533610b5f575b8315610b2a5750906000805160206110c183398151915291610af784600a54610f1e565b600a55338552600b8252808520610b0f858254610f1e565b90556002546105cb90859033906001600160a01b0316610f46565b82606492519162461bcd60e51b83528201526011602482015270043616e6e6f74207769746864726177203607c1b6044820152fd5b610b683361102a565b33865260098452828620556007546008845282862055610ad3565b8380fd5b509134610819578060031936011261081957506103ec6020925460055490610f82565b505034610205578160031936011261020557602090600a549051908152f35b5050346102055760203660031901126102055760209181906001600160a01b03610bf1610c27565b1681526009845220549051908152f35b505034610205576020366003190112610205576020906103ec610c22610c27565b61102a565b600435906001600160a01b0382168203610c3d57565b600080fd5b6000546001600160a01b03163303610c5657565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b91908201809211610ca757565b634e487b7160e01b600052601160045260246000fd5b601f909101601f19168101906001600160401b03821190821017610ce057604052565b634e487b7160e01b600052604160045260246000fd5b604080516001600160a01b03929092169291906001600160401b0390820181811183821017610ce0576040526020938483527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564858401526000808587829751910182855af1903d15610e3f573d928311610e2b5790610d9593929160405192610d8888601f19601f8401160185610cbd565b83523d868885013e610e4a565b805191821591848315610e07575b505050905015610db05750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b91938180945001031261020557820151908115158203610819575080388084610da3565b634e487b7160e01b85526041600452602485fd5b90610d959392506060915b91929015610eac5750815115610e5e575090565b3b15610e675790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015610ebf5750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b828510610f05575050604492506000838284010152601f80199101168101030190fd5b8481018201518686016044015293810193859350610ee2565b91908203918211610ca757565b6001600160a01b039091168152602081019190915260400190565b610f7b610f809392610f6d60405194859263a9059cbb60e01b602085015260248401610f2b565b03601f198101845283610cbd565b610cf6565b565b81810292918115918404141715610ca757565b8115610f9f570490565b634e487b7160e01b600052601260045260246000fd5b600354804210600014610fc757504290565b90565b600a54801561102357600754610ff6600454610ff0610fe7610fb5565b60065490610f1e565b90610f82565b670de0b6b3a764000090818102918183041490151715610ca757610fc79261101d91610f95565b90610c9a565b5060075490565b610fc79060018060a01b031660406000828152600b602052670de0b6b3a764000061106f83832054610ff061105d610fca565b87865260086020528686205490610f1e565b049281526009602052205490610c9a56fee2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e04868be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e07084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5a2646970667358221220e7265ddb6764df4e0b9196a79116f31373be8f8c180979e19ecad83ef1169c1364736f6c63430008130033";

type StakingRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingRewards__factory extends ContractFactory {
  constructor(...args: StakingRewardsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rewardsToken: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakingRewards> {
    return super.deploy(
      _rewardsToken,
      _stakingToken,
      overrides || {}
    ) as Promise<StakingRewards>;
  }
  override getDeployTransaction(
    _rewardsToken: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardsToken,
      _stakingToken,
      overrides || {}
    );
  }
  override attach(address: string): StakingRewards {
    return super.attach(address) as StakingRewards;
  }
  override connect(signer: Signer): StakingRewards__factory {
    return super.connect(signer) as StakingRewards__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingRewardsInterface {
    return new utils.Interface(_abi) as StakingRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewards {
    return new Contract(address, _abi, signerOrProvider) as StakingRewards;
  }
}
