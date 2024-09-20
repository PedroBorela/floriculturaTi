const mongodb = require('mongodb');

const ClienteMongo = mongodb.MongoClient;

var cliente;

const conexao_bd = async () => {
    if(!cliente)
        cliente = await ClienteMongo.connect('mongodb://127.0.0.1:27017');
}

const bd = () => {
    return cliente.db('bancoPedidos');
}

class Retiradas{
    async close(){
        if(cliente)
            cliente.close()
        cliente = undefined
    }

    async cria(retirada){
        await conexao_bd();
        const jsonRetiradas = bd().collection("retiradas")

        await jsonRetiradas.insertOne(retirada)

    }




}

module.exports = new Retiradas()