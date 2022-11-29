const houses = require("./db.json")

const incomingHousesID = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let {id} = req.params
        let index = houses.findIndex(houseElement => houseElement.id === +id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        let newHouse = {id: incomingHousesID, address: req.body.address,
                         price:req.body.price, image:req.body.imageURL }
            houses.push(newHouse);
            res.status(200).send(houses);
    },

    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(houseElement => houseElement.id === +id);
        if(type === "plus"){
            houses[index].price += 10000;
            res.status(200).send(houses);
        }
        else if(type === "minus"){
            houses[index].price -= 10000;
            res.status(200).send(houses);
        }
    }
}

