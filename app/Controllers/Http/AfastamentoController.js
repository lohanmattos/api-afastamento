'use strict'

const Afastamentos = use('App/Models/Afastamento')

class AfastamentoController {

    async store ({request}){
        const dataToCreate = request.only(["nome_militar","descricao","categoria","dataInicio", "dataFim"])

        return await Afastamentos.create(dataToCreate);
    }

    async list() {
        return await Afastamentos.all();
    }

    async show({ params }) {
        return await Afastamentos.find(params.id);
    }

    async update({ params, request }) {

        const afastamento = await Afastamentos.findOrFail(params.id);
    
        const dataToUpdate = request.only(["nome_militar","descricao","categoria","dataInicio", "dataFim"]);
    
        afastamento.merge(dataToUpdate);
    
        await afastamento.save();
    
        return afastamento;
    
    }

    async delete({ params }) {

        const afastamento = await Afastamentos.findOrFail(params.id);
    
        await afastamento.delete();
    
        return {
            message: 'Afastamento deletado!'
        }
    
    }
}

module.exports = AfastamentoController
