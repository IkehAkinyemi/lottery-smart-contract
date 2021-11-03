import { VMContext } from "near-mock-vm";
import { Context, u128 } from "near-sdk-core";
import { pickANum } from "../assembly";

import { Lottery, TxFee } from "../assembly/model";

const creator = "ikehakinyemi.testnet";

describe("Checks for creating account", () => {
  beforeEach(() => {
    VMContext.setAttached_deposit(TxFee);
    VMContext.setSigner_account_id(creator);
  });

  it("creates a new game", () => {
    const game = new Lottery();
    const id = game.id;
    expect(id).toBeTruthy("Confirmed that a game was created!");
  });

  it("create and reset the luckyNum of a new game", () => {
    const game = new Lottery();
    const resetValue = game.reset();

    expect(resetValue).toBeTruthy(
      "The luckyNum has been reset to another number"
    );
  });
});
