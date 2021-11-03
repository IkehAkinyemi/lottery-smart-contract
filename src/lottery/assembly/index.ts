import { TxFee, Lottery, players, Player, WinningPrize, GAS } from "./model";
import { u128, ContractPromiseBatch, Context, logging } from "near-sdk-as";

/**
 * @returns @GameID
 * creates a new game and return the id of the game.
 * To pick a new number require a deposit of 0.5 Near as transaction fee
 */
export function pickANum(): void {
  verifyDeposit(Context.attachedDeposit);
  const game = new Lottery();
  const guess = game.play();

  if (players.contains(Context.sender)) {
   let  player = players.get(Context.sender) as Player;
    player.guesses.push(guess);
    players.set(Context.sender, player);
  } else {
    new Player(guess);
  }
}

function on_payout_complete(): string {
  logging.log("This winner has successfully been paid");
  return new Lottery().reset();
}


/**
 * This handles the payout to a player who guesses a number eqaul to the luckyNum.
 * Transfers the winningPrize in Near token to a winner
 */
export function payout(): void {
  const player = players.get(Context.sender) as Player;

  for (let x = 0; x < player.guesses.length; x++) {
    if (player.guesses[x] === true) {
      const to_winner = ContractPromiseBatch.create(Context.sender);
      const self = Context.contractName;

      // transfer payout to winner
      to_winner.transfer(WinningPrize);

      // receive confirmation of payout before setting game to inactive
      to_winner
        .then(self)
        .function_call("on_payout_complete", "{}", u128.Zero, GAS);
    }
  }
}

/**
 * @param deposit
 * Verify the deposit is up to the threshold price of 0.5 Near tokens.
 */
function verifyDeposit(deposit: u128): void {
  assert(deposit >= TxFee, "You need 0.5 Near token to pick a number");
}
