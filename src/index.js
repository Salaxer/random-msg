const messages = [
    "Salaxer",
    "Hector",
    "Jessica",
    "Diego",
    "Laura",
    "Oscar",
    "Wendy",
    "Caro"
];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

randomMsg();

module.exports = {randomMsg};