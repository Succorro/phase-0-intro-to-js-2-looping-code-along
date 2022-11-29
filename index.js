const names = ["Guadalupe", "Ollie", "Aki"];
const event = ("surprise");
function writeCards(names, event) {
    let array = [ ];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(){
    for (let i = 10; i >= 0; i--)
    console.log(i)
}