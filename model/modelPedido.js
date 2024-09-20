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

class Pedidos{
    async close(){
        if(cliente)
            cliente.close()
        cliente = undefined
    }

    async cria(pedido){
        await conexao_bd();
        const jsonPedidos = bd().collection("pedidos")

        await jsonPedidos.insertOne(pedido)

    }




}

module.exports = new Pedidos()