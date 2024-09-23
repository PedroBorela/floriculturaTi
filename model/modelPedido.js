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
    async lista_pedidos(){
        await conexao_bd()
        const jsonPedidos = bd().collection("pedidos")
        const pedidos = await jsonPedidos.find({}).toArray()
        pedidos.forEach(pedido => {
            if (pedido.dataEntrega) {
                pedido.dataEntrega = new Date(pedido.dataEntrega).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
                console.log(pedido.dataEntrega)
            }
        });
        return pedidos
    }

    async consulta(codigo){
        await conexao_bd();
        const jsonPedidos = bd().collection("pedidos")
        const pedido = await jsonPedidos.findOne({codigo : codigo})
        return pedido
    }

    async atualiza(pedido){
            await conexao_bd();

            console.log("Esse é o pedido que chega no model",pedido)
            const jsonPedido = bd().collection("pedidos")
            await jsonPedido.updateOne(
                {codigo: pedido.codigo},
                {$set: {nome: pedido.nome, telefone: pedido.telefone, produtos: pedido.produtos, valorPedido: pedido.valorPedido, destinatario: pedido.destinatario,destinatarioNum: pedido.destinatarioNum, endereco: pedido.endereco, referencia:pedido.referencia , dataEntrega:pedido.dataEntrega , horarioEntrega: pedido.horarioEntrega}}
            )
      
    }

    async deleta(codigo) {
        await conexao_bd()
        const jsonPedido = bd().collection("pedidos")
        const doc = await jsonPedido.findOne({ codigo: codigo })
        if (!doc) {
            throw new Error(`Não existe a pedido com código: ${codigo}`)
        } else {
            await jsonPedido.findOneAndDelete({ codigo: codigo })
        }
    }

}

module.exports = new Pedidos()