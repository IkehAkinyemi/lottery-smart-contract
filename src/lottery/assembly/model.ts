import { logging, RNG, u128, PersistentMap, PersistentVector, Context } from 'near-sdk-as';

export type AccountID = string;

export const TxFee = u128.from("500000000000000000000000");
export const WinningPrize = u128.from("100000000000000000000000");
export const GAS: u64 = 20_000_000_000_000;

@nearBindgen
export class Lottery {
  private luckyNum: u32 = 3;
  id: string;

  constructor() {
    const randg = new RNG<u32>(1, u32.MAX_VALUE);
    this.id = "LO-" + randg.next().toString();
  }


  play(): bool {
    const randg = new RNG<u32>(1, u32.MAX_VALUE);
    const pickedNum = randg.next();
    logging.log("You picked: " + pickedNum.toString());


    return pickedNum === this.luckyNum;
  }

   reset(): string {
    const randg = new RNG<u32>(1, u32.MAX_VALUE);
    const  randNum = randg.next();
    assert(randNum !== this.luckyNum, "Rerun function again to generate a new randNum")

    this.luckyNum = randNum;
    return "The luckyNum has been reset to another number";
  }
}

@nearBindgen
export class Player {
  id: AccountID;
  guesses: PersistentVector<bool>

  constructor(isRight: bool) {
    this.id = Context.sender;
    this.guesses = new PersistentVector<bool>("g");

    this.guesses.push(isRight);
  }

} 

export const players = new PersistentMap<AccountID, Player>("p");