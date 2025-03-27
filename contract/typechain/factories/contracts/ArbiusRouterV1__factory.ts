/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ArbiusRouterV1,
  ArbiusRouterV1Interface,
} from "../../contracts/ArbiusRouterV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "engine_",
        type: "address",
      },
      {
        internalType: "address",
        name: "arbius_",
        type: "address",
      },
      {
        internalType: "address",
        name: "router_",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientSignatures",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidValidator",
    type: "error",
  },
  {
    inputs: [],
    name: "SignersNotSorted",
    type: "error",
  },
  {
    inputs: [],
    name: "TimeNotPassed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "taskid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "IncentiveAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "taskid",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "IncentiveClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minValidators",
        type: "uint256",
      },
    ],
    name: "MinValidatorsSet",
    type: "event",
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
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "ValidatorSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "taskid_",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "addIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "arbius",
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
        internalType: "bytes32",
        name: "taskid_",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Signature[]",
        name: "sigs_",
        type: "tuple[]",
      },
    ],
    name: "claimIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "taskid_",
        type: "bytes32",
      },
    ],
    name: "emergencyClaimIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "incentives",
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
    name: "minValidators",
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
    name: "receiver",
    outputs: [
      {
        internalType: "contract SwapReceiver",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
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
        name: "minValidators_",
        type: "uint256",
      },
    ],
    name: "setMinValidators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator_",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status_",
        type: "bool",
      },
    ],
    name: "setValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "version_",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "model_",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "fee_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "input_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "incentive_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gas_",
        type: "uint256",
      },
    ],
    name: "submitTask",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "version_",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "model_",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "fee_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "input_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "incentive_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gas_",
        type: "uint256",
      },
    ],
    name: "submitTaskWithETH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "version_",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "model_",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "fee_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "input_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "incentive_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountInMax_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gas_",
        type: "uint256",
      },
    ],
    name: "submitTaskWithToken",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "token_",
        type: "address",
      },
    ],
    name: "uniswapApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash_",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Signature[]",
        name: "sigs_",
        type: "tuple[]",
      },
    ],
    name: "validateSignatures",
    outputs: [],
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
    name: "validators",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060409080825234620001c95760808162001dad8038038091620000258285620001ce565b833981010312620001c9576200003b8162000208565b906020906200004c82820162000208565b6200006760606200005f87850162000208565b930162000208565b600080546001600160a01b0319808216339081178455895193989495946001600160a01b03949385928392839283929083167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08f80a31696878560015416176001551697888460025416176002551695868360035416176003551690600454161760045563095ea7b360e01b92838252600482015285816044818a600019998a60248401525af18015620001bf576044928795949289926200019d575b5060025416895196879586948552600485015260248401525af1801562000193576200015e575b505060065551611b759081620002388239f35b816200018292903d106200018b575b620001798183620001ce565b8101906200021d565b5038806200014b565b503d6200016d565b84513d85823e3d90fd5b620001b790873d89116200018b57620001798183620001ce565b503862000124565b88513d89823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b03821190821017620001f257604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620001c957565b90816020910312620001c957518015158103620001c9579056fe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c80631cec43ba14611116578063297035b3146110bc5780634623c91d1461103d57806351cff8d914610f465780636077779514610f1c578063715018a614610ed4578063739edcbe1461096f57806379dfe40c146109215780638da5cb5b146108fa57806391067f901461085c578063b286780514610841578063c5ab224114610823578063c9d4623f146107fa578063d7f332b61461071d578063e086e5ec146106ef578063e0d61b07146106c6578063e93ae81c1461047b578063f2fde38b146103ca578063f7260d3e146103a1578063f887ea4014610378578063fa52c7d8146103395763fb53f5b114610119575061000e565b3461033657808061012936611483565b95929098969493602061016860018060a01b036002541661014a8d8561164f565b6040519b8c809481936323b872dd60e01b8352303360048501611672565b03925af197881561032b5789986102d5575b506101b392889594926101a592604051968795602087019a6308745dd160e01b8c5260248801611694565b03601f1981018352826115b9565b60018060a01b0360015416905193f16101ca61161f565b501561029c576001546040516360beed9560e11b81529290602090849060049082906001600160a01b03165afa92831561028f578193610255575b509181602093829361021d575b505050604051908152f35b600080516020611b008339815191529160408285889452600784522061024482825461164f565b9055604051908152a2803880610212565b92506020833d602011610287575b81610270602093836115b9565b81010312610282576020925192610205565b600080fd5b3d9150610263565b50604051903d90823e3d90fd5b60405162461bcd60e51b81526020600482015260116024820152701cdd589b5a5d15185cdac819985a5b1959607a1b6044820152606490fd5b90929750602094939194813d602011610323575b816102f6602093836115b9565b8101031261031f57889788956101b3946103126101a5946115dc565b509250929495509261017a565b8880fd5b3d91506102e9565b6040513d8b823e3d90fd5b80fd5b50346103365760203660031901126103365760209060ff906040906001600160a01b03610364611440565b168152600584522054166040519015158152f35b50346103365780600319360112610336576003546040516001600160a01b039091168152602090f35b50346103365780600319360112610336576004546040516001600160a01b039091168152602090f35b5034610336576020366003190112610336576103e4611440565b6103ec611533565b6001600160a01b03908116908115610427576000548260018060a01b031982161760005516600080516020611b20833981519152600080a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b50346103365761048a366114e3565b90929160018060a01b0380600154169284806040519560209682888201916375c7050960e01b8352886024820152602481526104c58161159e565b51925af1506104d261161f565b95865187016080888783019203126106c25785880151978489168099036106be5760408101516001600160401b0391828216918290036106ba57610518606082016115dc565b506080810151908382116106b657019983603f8c0112156106ba57888b01519a6105418c611604565b9461054f60405196876115b9565b8c865260408d830101116106b6578a5b8c81106106a25750508989819c860101523303610656575b50506105bc92869492828661058f94519101206117f6565b6002541683865260078352604086205460405196878094819363a9059cbb60e01b835233600484016115e9565b03925af1801561064b57610612575b600792508084528282526040842054604051908152817f8c8fb16c3fff3e9353f4a39b33dd9e38ba88594f8c66defbff2048265738780b843393a383525280604081205580f35b8183813d8311610644575b61062781836115b9565b810103126106405761063a6007936115dc565b506105cb565b8380fd5b503d61061d565b6040513d86823e3d90fd5b603c9192985094929394019080821161068e574291161061067c57919086953880610577565b604051631a0a745560e11b8152600490fd5b634e487b7160e01b89526011600452602489fd5b818101604001518682018c01528a0161055f565b8a80fd5b8980fd5b8780fd5b8680fd5b50346103365780600319360112610336576002546040516001600160a01b039091168152602090f35b5034610336578060031936011261033657610708611533565b8080808047335af15061071961161f565b5080f35b50346103365760403660031901126103365760043560243560018060a01b03600254166040519182916323b872dd60e01b8352602092839181888161076787303360048501611672565b03925af180156107ef576107a9575b600080516020611b008339815191529250838552600782526040852061079d82825461164f565b9055604051908152a280f35b8183813d83116107e8575b6107be81836115b9565b810103126107e4576107de600080516020611b00833981519152936115dc565b50610776565b8480fd5b503d6107b4565b6040513d87823e3d90fd5b50346103365780600319360112610336576001546040516001600160a01b039091168152602090f35b50346103365780600319360112610336576020600654604051908152f35b503461033657610859610853366114e3565b916117f6565b80f35b5034610336576020366003190112610336578060206001600160a01b03604481610884611440565b60035460405163095ea7b360e01b8152941660048501526000196024850152929485938492165af180156108ef576108ba575080f35b6020813d82116108e7575b816108d2602093836115b9565b810103126108e357610719906115dc565b5080fd5b3d91506108c5565b6040513d84823e3d90fd5b5034610336578060031936011261033657546040516001600160a01b039091168152602090f35b5034610336576020366003190112610336577fbcfae85be40ac3606c557faf143ce6b08c7d99137b0c98eff034fddc6926c31b6020600435610961611533565b80600655604051908152a180f35b5034610336576101203660031901126103365760ff6004351660043503610282576024356001600160a01b0381169003610282576001600160401b03608435818111610dcb576109c3903690600401611456565b60c43592916001600160a01b0384168403610282576040516323b872dd60e01b8152602081806109fa60e435303360048501611672565b0381896001600160a01b038a165af18015610e0857610e9b575b50604051926080840190811184821017610e85576040526003835260603660208501376001600160a01b038416610a4a846116e0565b526003546040516315ab88c960e31b81526001600160a01b039091169390602081600481885afa908115610e7a578791610e4b575b50610a89826116ed565b6001600160a01b039182169052600280548351921695911115610e3557610b0187959186926060850152610ac160a43560643561164f565b938360018060a01b03600454169560405196879586948593634401edf760e11b8552600485015260e435602485015260a0604485015260a4840190611797565b906064830152600019608483015203925af1801561064b57610e13575b50600480546002546040516370a0823160e01b81526001600160a01b03928316938101849052929492911690602081602481855afa908115610e08578691610dd3575b50843b15610dcf57610b8c94869283604051809881958294635705ae4360e01b8452600484016115e9565b03925af192831561064b578493610db1575b5090610bdf610bd19260405193849160208301946308745dd160e01b865260643560443560243560043560248801611694565b03601f1981018452836115b9565b60015491519183906001600160a01b031661010435f1610bfd61161f565b501561029c576001546040516360beed9560e11b81529190602090839060049082906001600160a01b03165afa918215610da6578392610d72575b5060a435610d37575b6040516370a0823160e01b81523060048201526020816024816001600160a01b0386165afa90811561064b578491610d05575b5080610c86575b602083604051908152f35b610cab849260209260405196878094819363a9059cbb60e01b835233600484016115e9565b03926001600160a01b03165af1801561028f57610cc9575b80610c7b565b6020833d602011610cfd575b81610ce2602093836115b9565b810103126103365750610cf66020926115dc565b5038610cc3565b3d9150610cd5565b90506020813d602011610d2f575b81610d20602093836115b9565b81010312610282575138610c74565b3d9150610d13565b818352600760205260408320610d5060a435825461164f565b905581600080516020611b00833981519152602060405160a4358152a2610c41565b9091506020813d602011610d9e575b81610d8e602093836115b9565b8101031261028257519038610c38565b3d9150610d81565b6040513d85823e3d90fd5b610dbe909391929361158b565b610dcb5790829138610b9e565b8280fd5b8580fd5b9550506020853d602011610e00575b81610def602093836115b9565b810103126102825786945138610b61565b3d9150610de2565b6040513d88823e3d90fd5b610e2e903d8086833e610e2681836115b9565b81019061171c565b5038610b1e565b634e487b7160e01b600052603260045260246000fd5b610e6d915060203d602011610e73575b610e6581836115b9565b8101906116fd565b38610a7f565b503d610e5b565b6040513d89823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b6020813d602011610ecc575b81610eb4602093836115b9565b81010312610dcf57610ec5906115dc565b5038610a14565b3d9150610ea7565b5034610336578060031936011261033657610eed611533565b600080546001600160a01b0319811682556001600160a01b0316600080516020611b208339815191528280a380f35b50346103365760203660031901126103365760406020916004358152600783522054604051908152f35b5034610336576020806003193601126108e357610f61611440565b90610f6a611533565b6040516370a0823160e01b81523060048201526001600160a01b03928316928282602481875afa9182156107ef57859261100c575b5090610fc79383928654168660405180978195829463a9059cbb60e01b8452600484016115e9565b03925af18015610da657610fd9578280f35b81813d8311611005575b610fed81836115b9565b810103126108e357610ffe906115dc565b5038808280f35b503d610fe3565b91508282813d8311611036575b61102381836115b9565b8101031261028257905190610fc7610f9f565b503d611019565b503461033657604036600319011261033657611057611440565b60243590811515809203610dcb5760207f6b3b7d0d26ec99d080840dca1323c7147d1868adc66a4290afb8101d7908320d91611091611533565b6001600160a01b0316808552600582526040808620805460ff191660ff87161790555193845292a280f35b50346103365780602080600319360112611113576004356110db611533565b816105bc60018060a01b036002541683865260078352604086205460405196878094819363a9059cbb60e01b835233600484016115e9565b50fd5b5061112036611483565b949261113398969291979498608061159e565b600260805260403660a0376003546040516315ab88c960e31b81526001600160a01b0390911690602081600481855afa90811561032b578991611421575b5061117c60806116e0565b6001600160a01b0391821690526002541661119760806116ed565b52876111a38a8c61164f565b60018060a01b036004541692604051808095819463fb3bdb4160e01b83526004830152608060248301526111db608483016080611797565b9060448301526000196064830152039134905af180156113bd57611407575b50600480546002546040516370a0823160e01b81526001600160a01b039283169381018490529b92911660208c602481845afa9b8c156113fc578a9c6113c8575b50813b156106ba579a89916112689b9c83604051809e81958294635705ae4360e01b8452600484016115e9565b03925af180156113bd5761139a575b879850926101a588979695936112a7938996604051968795602087019a6308745dd160e01b8c5260248801611694565b60018060a01b0360015416905193f16112be61161f565b501561029c576001546040516360beed9560e11b81529190602090839060049082906001600160a01b03165afa91821561028f578192611363575b50818360209461132c575b505047611315575b50604051908152f35b80808047335af15061132561161f565b503861130c565b84600080516020611b0083398151915291838552600782526040852061135382825461164f565b9055604051908152a28138611304565b9291506020833d602011611392575b8161137f602093836115b9565b81010312610282576020925191926112f9565b3d9150611372565b926112a79196959492976113b06101a59a61158b565b9792949596915092611277565b6040513d8a823e3d90fd5b909b506020813d6020116113f4575b816113e4602093836115b9565b810103126106ba57519a3861123b565b3d91506113d7565b6040513d8c823e3d90fd5b61141a903d808a833e610e2681836115b9565b50386111fa565b61143a915060203d602011610e7357610e6581836115b9565b38611171565b600435906001600160a01b038216820361028257565b9181601f84011215610282578235916001600160401b038311610282576020838186019501011161028257565b60e06003198201126102825760043560ff8116810361028257916024356001600160a01b038116810361028257916044359160643591608435906001600160401b038211610282576114d791600401611456565b909160a4359060c43590565b604060031982011261028257600435916001600160401b03916024359083821161028257806023830112156102825781600401359384116102825760248460051b83010111610282576024019190565b6000546001600160a01b0316330361154757565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160401b038111610e8557604052565b606081019081106001600160401b03821117610e8557604052565b601f909101601f19168101906001600160401b03821190821017610e8557604052565b5190811515820361028257565b6001600160a01b039091168152602081019190915260400190565b6001600160401b038111610e8557601f01601f191660200190565b3d1561164a573d9061163082611604565b9161163e60405193846115b9565b82523d6000602084013e565b606090565b9190820180921161165c57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03918216815291166020820152604081019190915260600190565b9491928694919360ff60c0989516875260018060a01b031660208701526040860152606085015260a060808501528160a0850152848401376000828201840152601f01601f1916010190565b805115610e355760200190565b805160011015610e355760400190565b9081602091031261028257516001600160a01b03811681036102825790565b9060209081838203126102825782516001600160401b0393848211610282570181601f82011215610282578051938411610e85578360051b9060405194611765858401876115b9565b85528380860192820101928311610282578301905b828210611788575050505090565b8151815290830190830161177a565b90815180825260208080930193019160005b8281106117b7575050505090565b83516001600160a01b0316855293810193928101926001016117a9565b9190811015610e355760051b81013590603e1981360301821215610282570190565b91906006548210611928576000805b838210611813575050505050565b61181e8285856117d4565b35906001600160a01b0390818316908184036102825782829116101561191657806000526020916005835260409260ff84600020541615611905576118648689896117d4565b8181013590601e198136030182121561028257018035906001600160401b0382116102825782810182360381136102825761189e83611604565b916118ab885193846115b9565b838352848436920101116102825783836118d3946000936118db97860137830101528a611a4f565b91909161193a565b16036118f5575090600019811461165c5760010190611805565b51638baa579f60e01b8152600490fd5b8351631a0a9b9f60e21b8152600490fd5b60405163a7781cbb60e01b8152600490fd5b604051633724e34360e11b8152600490fd5b6005811015611a39578061194b5750565b600181036119935760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606490fd5b600281036119e05760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b6003146119e957565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b906041815114600014611a7d57611a79916020820151906060604084015193015160001a90611a87565b9091565b5050600090600290565b9291906fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311611af35791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa1561028f5781516001600160a01b03811615611aed579190565b50600190565b5050505060009060039056fe19d4213c1f22deb153156be5bf9eee8fe77c36a557d83434b8cbb543fc034d6a8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220ddef8147e552558a6aead0b0c1dd3f60832de88a0cb8504c7eddf5bb1c4362f864736f6c63430008130033";

type ArbiusRouterV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArbiusRouterV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArbiusRouterV1__factory extends ContractFactory {
  constructor(...args: ArbiusRouterV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    engine_: PromiseOrValue<string>,
    arbius_: PromiseOrValue<string>,
    router_: PromiseOrValue<string>,
    receiver_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ArbiusRouterV1> {
    return super.deploy(
      engine_,
      arbius_,
      router_,
      receiver_,
      overrides || {}
    ) as Promise<ArbiusRouterV1>;
  }
  override getDeployTransaction(
    engine_: PromiseOrValue<string>,
    arbius_: PromiseOrValue<string>,
    router_: PromiseOrValue<string>,
    receiver_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      engine_,
      arbius_,
      router_,
      receiver_,
      overrides || {}
    );
  }
  override attach(address: string): ArbiusRouterV1 {
    return super.attach(address) as ArbiusRouterV1;
  }
  override connect(signer: Signer): ArbiusRouterV1__factory {
    return super.connect(signer) as ArbiusRouterV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbiusRouterV1Interface {
    return new utils.Interface(_abi) as ArbiusRouterV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbiusRouterV1 {
    return new Contract(address, _abi, signerOrProvider) as ArbiusRouterV1;
  }
}
