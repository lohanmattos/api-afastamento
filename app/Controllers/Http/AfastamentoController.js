'use strict'

const Afastamentos = use('App/Models/Afastamento')
const Database = use('Database')

const { format, parseISO} = require('date-fns')

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

    async filtarPorData({ params}) {
        const data = await params.data;
        const dataFormatIncial = format(new Date(parseISO(data)),'yyyy-MM-dd');

        const dataFim = await params.dataFim;
        const dataFormatFim = format(new Date(parseISO(dataFim)),'yyyy-MM-dd');


        const afastamento = await Database.
        from('afastamentos').
        //maior e igual a data
        //where('dataInicio', '>=', dataFormat)
        where('dataInicio', 'Between', [dataFormatIncial, dataFormatFim])

    
        return afastamento
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
