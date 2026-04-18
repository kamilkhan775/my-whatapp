const mongoose = require("mongoose");

const Chat =require("./models/chat.js");


main()

.then(() =>{
  console.log("connection succesfull");
})

.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');

  
}

let allchats = [
    {
        from:"neha",
        to:"preete",
        msg:"send me photo",
        created_at: new Date(),
    },

    {
        from:"kamil",
        to:"moshin",
        msg:"send me phoneno",
        created_at: new Date(),
    },
    {
        from:"muda",
        to:"adil",
        msg:"send me paytm bar code",
        created_at: new Date(),
    },

    {
        from:"suzain",
        to:"anas",
        msg:"send me book",
        created_at: new Date(),
    },

    {
        from:"gular",
        to:"bjas",
        msg:"send me id",
        created_at: new Date(),
    },
];

Chat.insertMany(allchats);

    