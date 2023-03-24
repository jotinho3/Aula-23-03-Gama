// tipo de valor bem legal chamdo array (lista)

 // tipo array

// tipo objeto 

const receitasDePizza = [
    {
        id: 0,
        titulo: "pizza de queijo",
        dificuldade: 'medio',
        ingredientes: ['farinha', 'fermento', 'ovo', 'queijo'],
        gluten: true
    },


]



function adicionarNovaReceita(id, titulo, dificuldade, ingredientes, gluten) {
    //metodo push

    receitasDePizza.push({
        id,
        titulo,
        dificuldade,
        ingredientes,
        gluten,
    })


}



//metodo forEach permite ciclar por todos os itens de um array e fazer uma ação para cada item

function listarTodasReceitas(){
    receitasDePizza.forEach(receita => {
        console.log(receita.titulo)
        console.log('-----------------')
        console.log(receita.ingredientes)
        console.log('-----------------')

        if (receita.gluten == true) {
            console.log('A receita contém glúten')
            console.log('--------- Proxima receita --------')
        } else {
            console.log('A receita NÃO contém glúeten')
            console.log('--------- Proxima receita --------')
        }


    })

}

function excluirReceitaPorId(){

//? Desafio
    
}



adicionarNovaReceita(1, 'pizza de portuguesa', 'medio', ['farinha', 'ovo', 'tomate', 'fermento'], true)
adicionarNovaReceita(2, 'pizza de alho', 'facil', ['farinha', 'ovo', 'alho', 'fermento'], false)
adicionarNovaReceita(3213, 'pizza de frango', 'medio', ['farinha', 'ovo', 'frango', 'fermento'], false)

listarTodasReceitas()


// excluirReceitaPorId() desafio!


