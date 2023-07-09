const names = ["Guadalupe", "Ollie", "Aki"]
const event = surprise
function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
    }
    return messages;
  }

  
  function countDown(i) {
    console.log(i);
    i>0 && countDown(i-1);
}
    countDown(10);
