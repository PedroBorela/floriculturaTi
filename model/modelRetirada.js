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
    async lista_retiradas(){
        await conexao_bd()
        const jsonRetiradas = bd().collection("retiradas")
        const retiradas = await jsonRetiradas.find({}).toArray()
        retiradas.forEach(retirada => {
            if (retirada.dataEntrega) {
                retirada.dataEntrega = new Date(retirada.dataEntrega).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
                console.log(retirada.dataEntrega)
            }
        });
        return retiradas
    }
    async consulta(codigo){
        await conexao_bd();
        const jsonRetiradas = bd().collection("retiradas")
        const retirada = await jsonRetiradas.findOne({codigo : codigo})
        return retirada
    }

    async atualiza(retirada){
            await conexao_bd();

            console.log("Esse é o pedido que chega no model",retirada)
            const jsonRetiradas = bd().collection("retiradas")
            await jsonRetiradas.updateOne(
                {codigo: retirada.codigo},
                {$set: {nome: retirada.nome, telefone: retirada.telefone, produtos: retirada.produtos, valorPedido: retirada.valorPedido,retirada:retirada.retirada,retiradaNum:retirada.retiradaNum,  dataEntrega:retirada.dataEntrega , horarioEntrega: retirada.horarioEntrega}}
            )
      
    }

    async deleta(codigo) {
        await conexao_bd()
        const jsonRetiradas = bd().collection("retiradas")
        const doc = await jsonRetiradas.findOne({ codigo: codigo })
        if (!doc) {
            throw new Error(`Não existe a pedido com código: ${codigo}`)
        } else {
            await jsonRetiradas.findOneAndDelete({ codigo: codigo })
        }
    }


}

module.exports = new Retiradas()