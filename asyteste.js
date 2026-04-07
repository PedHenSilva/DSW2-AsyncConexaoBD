import CarroDB from './asyconexao.js';
// Certifique-se de que o caminho está correto

async function testarCRUD() {
    try {
        console.log("--- Iniciando Testes ---");
/*
        // 1. Testando o SAVE (Inserir)
        console.log("\n1. Testando Save...");
        const novoCarro = { nome: "Fusca Turbo", tipo: "Classicos" };
        const carroSalvo = await CarroDB.save(novoCarro);
        console.log("Carro salvo com sucesso:", carroSalvo);
*/
        
        // 2. Testando o GET ALL (Listar todos)
        console.log("\n2. Listando todos os carros...");
        const todosCarros = await CarroDB.getCarros();
        console.log(`Total de carros encontrados: ${todosCarros.length}`);

/*
        // 3. Testando o GET BY ID
        console.log("\n3. Buscando carro pelo ID...");
        const carroBusca = await CarroDB.getCarrosById(carroSalvo.id);
        console.log("Resultado da busca:", carroBusca);
*/
/*
        // 4. Testando o GET BY TIPO
        console.log("\n4. Buscando carros por tipo (Classicos)...");
        const classicos = await CarroDB.getCarrosByTipo("Classicos");
        console.log(`Encontrados ${classicos.length} clássicos.`);
*/
/*
        // 5. Testando o UPDATE (Atualizar)
        console.log("\n5. Atualizando nome do carro...");
        carroSalvo.nome = "Fusca 1970 Reformado";
        const carroAtualizado = await CarroDB.update(carroSalvo);
        console.log("Carro atualizado:", carroAtualizado);
*/
/*
        // 6. Testando o DELETE
        console.log("\n6. Deletando o carro de teste...");
        const linhasAfetadas = await CarroDB.deleteById(carroSalvo.id);
        console.log(`Carro deletado. Linhas removidas: ${linhasAfetadas}`);
*/
        console.log("\n--- Testes Finalizados com Sucesso ---");

    } catch (error) {
        console.error("\n[ERRO NO TESTE]:", error.message);
    }
}

// Executa o teste
testarCRUD();