# Lottery

This repository includes a complete project structure for AssemblyScript contracts targeting the NEAR platform.

The example here is playful.  It's a toy involving a lottery.

The goal of this repository is to make it as easy as possible to get started writing unit and simulation tests for AssemblyScript contracts built to work with NEAR Protocol.

## ⚠️ Warning

Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only.  NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.

## Usage

### Getting started

1. clone this repo to a local folder
2. run `yarn`
3. run `yarn test`

### Top-level `yarn` commands

- run `yarn test` to run all tests
  - (!) be sure to run `yarn build:release` at least once before:
    - run `yarn test:unit` to run only unit tests
    - run `yarn test:simulate` to run only simulation tests
- run `yarn build` to quickly verify build status
- run `yarn clean` to clean up build folder

### Other documentation

- Lottery contract and test documentation
  - see `/src/lottery/README` for Lottery interface
  - see `/src/lottery/__tests__/README` for Lottery unit testing details

- Lottery contract simulation tests
  - see `/simulation/README` for simulation testing


## The file system

Please note that boilerplate project configuration files have been ommitted from the following lists for simplicity.

### Contracts and Unit Tests

```txt
src
├── lottery                       <-- Lottery contract
│   ├── README.md
│   ├── __tests__
│   │   ├── README.md
│   │   ├── fee-strategies.unit.spec.ts
│   │   ├── index.unit.spec.ts
│   │   └── lottery.unit.spec.ts
│   └── assembly
│       ├── fee-strategies.ts
│       ├── index.ts
│       └── lottery.ts
└── utils.ts                      <-- shared contract code
```


### Simulation Tests

```txt
simulation                        <-- simulation tests
├── Cargo.toml
├── README.md
└── src
    ├── lib.rs
    └── lottery.rs
```

### Helper Scripts

```txt
scripts
├── 1.init.sh
├── 2.play.sh
├── 3.reset.sh
├── README.md                     <-- instructions
├── report.sh
├── x-configure-fee.sh
└── x-configure-lottery.sh
```
