/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TimelockV1,
  TimelockV1Interface,
} from "../../contracts/TimelockV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "admin",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "CallSalt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
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
  "0x604060808152346200041b576200226490813803806200001f8162000420565b93843982016080838203126200041b578251602080850151919490916001600160401b03908181116200041b57846200005a91840162000471565b93858301519182116200041b576200007b6060916200008393850162000471565b92016200045c565b7f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca56000948186528585526001928388882001918383549355837fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9381858b80a4848080868b8d887fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc194859283855284200192848454945580a4868b8d7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639889835283868385200181815491558b838680a47ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78395869283855284200192848454945580a4868b528b8b20308c528a528a8c60ff9889828420541615620003e4575b6001600160a01b03978816918d836200038f575b8493509150865b6200029c575b50909550505050505b62000214575b887f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5818a8d8b816002558351928352820152a151611d0f9081620005358239f35b85518110156200029657906200025682826200023288958a62000509565b5116858b528a8a528b8b20818c528a52868c8c205416156200025e575b50620004e3565b9091620001cd565b858b528a8a528b8b20818c528a528b8b20805460ff191686179055339086600080516020620022448339815191528d80a4386200024f565b620001d3565b875184101562000389579083929189620002bb6200030e968b62000509565b511686845283835281842081855283528c82852054161562000351575b5089620002e6858b62000509565b51169187845283815281842083855281528c82852054161562000318575b50505050620004e3565b8b8b8e86620001be565b878452838152818420908385525282208760ff198254161790558560008051602062002244833981519152339380a48c388f8e62000304565b8684528383528184208185528352818420805460ff19168a179055339087600080516020620022448339815191528680a438620002d8565b620001c4565b8490838252528d81852090848652528d8b8286205416620001b7578285528490528084208385528e528320805460ff1916871790553392600080516020620022448339815191529080a48a38808e8d620001b7565b808352828d528183203084528d528183208660ff19825416179055333082600080516020620022448339815191528680a4620001a3565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200044657604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200041b57565b81601f820112156200041b578051916001600160401b03831162000446578260051b6020928380620004a581850162000420565b8097815201928201019283116200041b578301905b828210620004c9575050505090565b838091620004d7846200045c565b815201910190620004ba565b6000198114620004f35760010190565b634e487b7160e01b600052601160045260246000fd5b80518210156200051e5760209160051b010190565b634e487b7160e01b600052603260045260246000fdfe608060405260048036101561001d575b50361561001b57600080fd5b005b600090813560e01c90816301d5062a14610d3157816301ffc9a714610cc157816307bd026514610c985781630d3cf6fc14610c5d578163134008d314610bcd57816313bc9f2014610baf578163150b7a0214610b59578163248a9ca314610b2d5781632ab0f52914610b005781632f2ff15d14610a5157816331d5075014610a2557816336568abe14610994578163584b153e1461095d57816364d62353146108af5781638065657f1461088f5781638f2a0bb0146107665781638f61f4f51461073d57816391d14854146106f4578163a217fddf146106d8578163b08e51c0146106af578163b1c5f42714610684578163bc197c81146105f9578163c4d252f514610346578163d45c44351461031c578163d547741f146102dd578163e38335e5146101d8578163f23a6e611461017a575063f27a0c920361000f57346101775780600319360112610177576020600254604051908152f35b80fd5b9050346101d45760a03660031901126101d457610195610dea565b5061019e610e05565b506084356001600160401b0381116101d0576101bd9250369101610f05565b5060405163f23a6e6160e01b8152602090f35b8280fd5b5080fd5b8261024b60ff6040610244846101ed36610f7c565b92848688849f989c979a9e8f90859f8e899f600080516020611c5a833981519152909a999a5280602052818120818052602052205416156102cf575b6102348483146116fb565b61023f8683146116fb565b611585565b9788611a18565b875b818110610261578861025e89611aae565b80f35b808089600080516020611c1a83398151915289896102c26102a9868f6102a2828f928f908f6102ca9f6102979161029c93611778565b61179e565b97611778565b35956117b2565b906102b68282878761190a565b604051948594856118e3565b0390a3611753565b61024d565b6102d833611238565b610229565b9050346101d45760403660031901126101d45761025e90356102fd610e05565b90808452836020526103176001604086200154339061136b565b611477565b9050346101d45760203660031901126101d457602091604091358152600183522054604051908152f35b9050346101d4576020806003193601126101d057813591600080516020611c9a83398151915280855284835260408520338652835260ff6040862054161561043757506103a183600052600160205260016040600020541190565b156103db5750600190828452528160408120557fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb708280a280f35b6084916040519162461bcd60e51b8352820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b6064820152fd5b8461044133611add565b916040519061044f82610e96565b604282528582019260603685378251156105e657603084538251906001918210156105d35790607860218501536041915b81831161056857505050610538576044939291610506604861052a936040519384916104f78b840198600080516020611bfa8339815191528a526104ce8d8251928391603789019101611043565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190611043565b01036028810184520182610ec7565b60405195869462461bcd60e51b865285015251809281602486015285850190611043565b601f01601f19168101030190fd5b60648486806040519262461bcd60e51b84528301526024820152600080516020611bda8339815191526044820152fd5b909192600f811660108110156105c0576f181899199a1a9b1b9c1cb0b131b232b360811b901a6105988587611acc565b53871c9280156105ad57600019019190610480565b634e487b7160e01b825260118852602482fd5b634e487b7160e01b835260328952602483fd5b634e487b7160e01b815260328752602490fd5b634e487b7160e01b815260328652602490fd5b9050346101d45760a03660031901126101d457610614610dea565b5061061d610e05565b506001600160401b036044358181116106805761063d9036908401610fdd565b50606435818111610680576106559036908401610fdd565b506084359081116101d05761066d9250369101610f05565b5060405163bc197c8160e01b8152602090f35b8380fd5b82346101775760206106a761069836610f7c565b96959095949194939293611585565b604051908152f35b82346101775780600319360112610177576020604051600080516020611c9a8339815191528152f35b8234610177578060031936011261017757602090604051908152f35b9050346101d45760403660031901126101d457604060209260ff92610717610e05565b903582528185528282206001600160a01b03909116825284522054604051911615158152f35b82346101775780600319360112610177576020604051600080516020611c3a8339815191528152f35b9050346101d45760c03660031901126101d4576001600160401b03908035828111610680576107989036908301610f4c565b9260243581811161088b576107b09036908501610f4c565b919093604435918211610887576107cc84918693369101610f4c565b606494919435916107ee89848489856084359d8e9560a4359b61022933611066565b986107f9858b6117f3565b898b5b82811061082e578c828c8061080f578280f35b6020600080516020611cba83398151915291604051908152a281808280f35b8061088092600080516020611c7a8339815191528b8b6102c28f8c6108738f928e61086c8f8f906108666102978f8097948195611778565b99611778565b35976117b2565b90604051968796876116c3565b8a906107fc565b8680fd5b8580fd5b82346101775760206106a76108a336610e48565b94939093929192611530565b9050346101d45760203660031901126101d45780359030330361090557507f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d560406002548151908152836020820152a160025580f35b60849060206040519162461bcd60e51b8352820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b6064820152fd5b823461017757602036600319011261017757602061098a8335600052600160205260016040600020541190565b6040519015158152f35b8234610177576040366003190112610177576109ae610e05565b336001600160a01b038216036109c95761025e919235611477565b60405162461bcd60e51b8152602081850152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b823461017757602036600319011261017757602061098a83356000526001602052604060002054151590565b9050346101d45760403660031901126101d45735610a6d610e05565b81835282602052610a866001604085200154339061136b565b818352602083815260408085206001600160a01b039093168086529290915283205460ff1615610ab4578280f35b818352826020526040832081845260205260408320600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a438808280f35b823461017757602036600319011261017757602061098a8335600052600160205260016040600020541490565b9050346101d45760203660031901126101d4576040602092600192358152808452200154604051908152f35b9050346101d45760803660031901126101d457610b74610dea565b50610b7d610e05565b506064356001600160401b0381116101d057610b9c9250369101610f05565b50604051630a85bd0160e11b8152602090f35b823461017757602036600319011261017757602061098a83356114eb565b8261025e610c3b82610c47600080516020611c1a833981519152610c32610bf336610e48565b600080516020611c5a8339815191528a9995979299949394528960205260408a208a805260205260ff60408b20541615610c4f575b8884848989611530565b98899788611a18565b6102b68282878761190a565b0390a3611aae565b610c5833611238565b610c28565b823461017757806003193601126101775760206040517f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca58152f35b82346101775780600319360112610177576020604051600080516020611c5a8339815191528152f35b9050346101d45760203660031901126101d4573563ffffffff60e01b81168091036101d457602090630271189760e51b8114908115610d06575b506040519015158152f35b637965db0b60e01b811491508115610d20575b5082610cfb565b6301ffc9a760e01b14905082610d19565b9050346101d45760c03660031901126101d457610d4c610dea565b826024356044356001600160401b0381116101d057600080516020611c7a83398151915294610d7d91369101610e1b565b94909160643594610dbf6084359660a43590610d9833611066565b610da689828c8a8989611530565b998a97610db3848a6117f3565b604051968796876116c3565b0390a380610dcb578280f35b6020600080516020611cba83398151915291604051908152a238808280f35b600435906001600160a01b0382168203610e0057565b600080fd5b602435906001600160a01b0382168203610e0057565b9181601f84011215610e00578235916001600160401b038311610e005760208381860195010111610e0057565b60a0600319820112610e00576004356001600160a01b0381168103610e00579160243591604435906001600160401b038211610e0057610e8a91600401610e1b565b90916064359060843590565b608081019081106001600160401b03821117610eb157604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b03821190821017610eb157604052565b6001600160401b038111610eb157601f01601f191660200190565b81601f82011215610e0057803590610f1c82610eea565b92610f2a6040519485610ec7565b82845260208383010111610e0057816000926020809301838601378301015290565b9181601f84011215610e00578235916001600160401b038311610e00576020808501948460051b010111610e0057565b9060a0600319830112610e00576001600160401b03600435818111610e005783610fa891600401610f4c565b93909392602435838111610e005782610fc391600401610f4c565b93909392604435918211610e0057610e8a91600401610f4c565b9080601f83011215610e00578135906001600160401b038211610eb1578160051b6040519360209361101185840187610ec7565b85528380860192820101928311610e00578301905b828210611034575050505090565b81358152908301908301611026565b60005b8381106110565750506000910152565b8181015183820152602001611046565b6001600160a01b031660008181527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d560209081526040808320549093600080516020611c3a8339815191529160ff16156110c1575050505050565b6110ca90611add565b908451906110d782610e96565b6042825283820194606036873782511561122457603086538251906001918210156112245790607860218501536041915b8183116111b6575050506111865784611162604861052a93604497985198899161115389840198600080516020611bfa8339815191528a526104ce815180928d603789019101611043565b01036028810189520187610ec7565b5194859362461bcd60e51b8552600485015251809281602486015285850190611043565b60648386519062461bcd60e51b82528060048301526024820152600080516020611bda8339815191526044820152fd5b909192600f81166010811015611210576f181899199a1a9b1b9c1cb0b131b232b360811b901a6111e68587611acc565b5360041c9280156111fc57600019019190611108565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b6001600160a01b031660008181527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d706960209081526040808320549093600080516020611c5a8339815191529160ff1615611293575050505050565b61129c90611add565b908451906112a982610e96565b6042825283820194606036873782511561122457603086538251906001918210156112245790607860218501536041915b818311611325575050506111865784611162604861052a93604497985198899161115389840198600080516020611bfa8339815191528a526104ce815180928d603789019101611043565b909192600f81166010811015611210576f181899199a1a9b1b9c1cb0b131b232b360811b901a6113558587611acc565b5360041c9280156111fc576000190191906112da565b6000908082526020908282526040938484209060018060a01b031690818552835260ff85852054161561139f575050505050565b6113a890611add565b908451906113b582610e96565b6042825283820194606036873782511561122457603086538251906001918210156112245790607860218501536041915b818311611431575050506111865784611162604861052a93604497985198899161115389840198600080516020611bfa8339815191528a526104ce815180928d603789019101611043565b909192600f81166010811015611210576f181899199a1a9b1b9c1cb0b131b232b360811b901a6114618587611acc565b5360041c9280156111fc576000190191906113e6565b9060009180835282602052604083209160018060a01b03169182845260205260ff6040842054166114a757505050565b80835282602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b6000526001602052604060002054600181119081611507575090565b905042101590565b908060209392818452848401376000828201840152601f01601f1916010190565b9461156661157f94959293604051968795602087019960018060a01b03168a52604087015260a0606087015260c086019161150f565b91608084015260a083015203601f198101835282610ec7565b51902090565b969294909695919560405196602091828901998060c08b0160a08d525260e08a01919060005b81811061169b57505050601f19898203810160408b0152888252976001600160fb1b038111610e00579089969495939897929160051b80928a830137019380888601878703606089015252604085019460408260051b82010195836000925b8484106116325750505050505061157f9550608084015260a083015203908101835282610ec7565b9193969850919398999496603f198282030184528935601e1984360301811215610e005783018681019190356001600160401b038111610e00578036038313610e00576116848892839260019561150f565b9b0194019401918b98969394919a9997959a61160a565b90919283359060018060a01b038216809203610e0057908152850192850191906001016115ab565b9290936116f1926080959897969860018060a01b03168552602085015260a0604085015260a084019161150f565b9460608201520152565b1561170257565b60405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b6064820152608490fd5b60001981146117625760010190565b634e487b7160e01b600052601160045260246000fd5b91908110156117885760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b0381168103610e005790565b91908110156117885760051b81013590601e1981360301821215610e005701803591906001600160401b038311610e00576020018236038113610e00579190565b9061180b826000526001602052604060002054151590565b61188657600254811061183257420190814211611762576000526001602052604060002055565b60405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b6064820152608490fd5b611907949260609260018060a01b031682526020820152816040820152019161150f565b90565b90926000938493826040519384928337810185815203925af13d156119b4573d61193381610eea565b906119416040519283610ec7565b8152600060203d92013e5b1561195357565b60405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b6064820152608490fd5b61194c565b156119c057565b60405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604482015269206e6f7420726561647960b01b6064820152608490fd5b611a24611a29916114eb565b6119b9565b8015908115611a8f575b5015611a3b57565b60405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b6064820152608490fd5b611aa89150600052600160205260016040600020541490565b38611a33565b611aba611a24826114eb565b60005260016020526001604060002055565b908151811015611788570160200190565b60405190606082016001600160401b03811183821017610eb157604052602a82526020820160403682378251156117885760309053815160019081101561178857607860218401536029905b808211611b6b575050611b395790565b606460405162461bcd60e51b81526020600482015260206024820152600080516020611bda8339815191526044820152fd5b9091600f81166010811015611bc4576f181899199a1a9b1b9c1cb0b131b232b360811b901a611b9a8486611acc565b5360041c918015611baf576000190190611b29565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fdfe537472696e67733a20686578206c656e67746820696e73756666696369656e74416363657373436f6e74726f6c3a206163636f756e7420000000000000000000c2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e634cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dcafd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78320fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387a26469706673582212207f1ad9f8c9ea63235cb8420b71d0103a51e6e785395a265b64d5ec316aafb0f864736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type TimelockV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockV1__factory extends ContractFactory {
  constructor(...args: TimelockV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimelockV1> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    ) as Promise<TimelockV1>;
  }
  override getDeployTransaction(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    );
  }
  override attach(address: string): TimelockV1 {
    return super.attach(address) as TimelockV1;
  }
  override connect(signer: Signer): TimelockV1__factory {
    return super.connect(signer) as TimelockV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockV1Interface {
    return new utils.Interface(_abi) as TimelockV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockV1 {
    return new Contract(address, _abi, signerOrProvider) as TimelockV1;
  }
}
