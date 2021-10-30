## Unit tests

Unit tests can be run from the top level folder using the following command:

```
yarn test:unit
```

### Tests for Contract in `index.unit.spec.ts`

You can run just these tests using

```
yarn asp -f index.unit
```

```
[Describe]: Contract

 [Success]: ✔ can be initialized with owner
 [Success]: ✔ is active when initialized

[Describe]: Contract interface for Lottery

 [Success]: ✔ provides an explanation of the lottery
 [Success]: ✔ provides a value for what a player may win
 [Success]: ✔ allows a player to play
 [Success]: ✔ provides access to most recent player
 [Success]: ✔ confirms whether a player has played
 [Success]: ✔ reports the winner of the lottery

[Describe]: Contract interface for Lottery Fees

 [Success]: ✔ reports the current fee to play the lottery
 [Success]: ✔ reports the fee strategy
 [Success]: ✔ explains possible fee strategies
 [Success]: ✔ adjusts the fee after 1 player

[Describe]: Contract interface for Lottery Management

 [Success]: ✔ allows ONLY the owner to change the terms of the lottery
 [Success]: ✔ adjusts the fee based on FeeStrategy
 [Success]: ✔ allows ONLY the owner to reset the lottery

    [File]: src/lottery/__tests__/index.unit.spec.ts
  [Groups]: 5 pass, 5 total
  [Result]: ✔ PASS
[Snapshot]: 0 total, 0 added, 0 removed, 0 different
 [Summary]: 15 pass,  0 fail, 15 total
    [Time]: 133.988ms
```


### Tests for Lottery in `lottery.unit.spec.ts`

You can run just these tests using

```
yarn asp -f lottery.unit
```

```
[Describe]: Lottery

 [Success]: ✔ can explain itself

[Describe]: Lottery#play

 [Success]: ✔ plays like a lottery

[Describe]: Lottery#configure

 [Success]: ✔ can be reconfigured
 [Success]: ✔ throws with invalid values for chance

    [File]: src/lottery/__tests__/lottery.unit.spec.ts
  [Groups]: 4 pass, 4 total
  [Result]: ✔ PASS
[Snapshot]: 0 total, 0 added, 0 removed, 0 different
 [Summary]: 4 pass,  0 fail, 4 total
    [Time]: 11.824ms
```

### Tests for FeeStrategy in `fee-strategies.unit.spec.ts`


You can run just these tests using

```
yarn asp -f strategies.unit
```

```
[Describe]: FeeStrategy

 [Success]: ✔ is instantiated with exponential strategy by default
 [Success]: ✔ can be instantiated with a different strategy
 [Success]: ✔ can explain itself

[Describe]: FeeStrategy#calculate_fee

 [Success]: ✔ handles StrategyType.Free
 [Success]: ✔ handles StrategyType.Constant
 [Success]: ✔ handles StrategyType.Linear
 [Success]: ✔ handles StrategyType.Exponential

    [File]: src/lottery/__tests__/fee-strategies.unit.spec.ts
  [Groups]: 3 pass, 3 total
  [Result]: ✔ PASS
[Snapshot]: 0 total, 0 added, 0 removed, 0 different
 [Summary]: 7 pass,  0 fail, 7 total
    [Time]: 6.896ms
```
