// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const coins = {"H": 0, "Q" : 0, "D" : 0, "N" : 0, "P" : 0};
      if(currency < 0){
        return {};
      }
      else if (currency > 10000){
        const errorObj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return errorObj;
      }
      var halfs = Math.floor(currency / 50);
      if(halfs !== 0){
        coins.H = halfs;
      }
      var leftsAfterHalfs = currency % 50;

      var quarters = Math.floor(leftsAfterHalfs/25);
      if(quarters !==0){
        coins.Q = quarters;
      }
      var leftsAfterQuarts = leftsAfterHalfs % 25;

      var dimes = Math.floor(leftsAfterQuarts/10);
      if(dimes !== 0){
        coins.D = dimes;
      }
      var leftsAfterDimes = leftsAfterQuarts % 10;

      var nickels = Math.floor(leftsAfterDimes/5);
      if(nickels !==0){
        coins.N = nickels;
      }
      var leftsAfterNickels = leftsAfterDimes % 5;

      var pennies = Math.floor(leftsAfterNickels/1);
      if(pennies !==0){
        coins.P = pennies;
      }
      return coins;
}
