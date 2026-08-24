import mysql from 'mysql2/promise'

export default class CarroDB {

    static async connect() {
        // Criar a conexão usando a interface de Promises
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'livro'
        })
        return connection
    }

    // Retornar lista
    static async getCarros() {
        const connection = await CarroDB.connect()
        try {
            const sql = "select * from carro"
            const [results] = await connection.execute(sql)
            return results
        } finally {
            await connection.end()
        }
    }

    // Listar por tipo
    static async getCarrosByTipo(tipo) {
        const connection = await CarroDB.connect()
        try {
            // Usando placeholders (?) para evitar SQL Injection
            const sql = "select id, nome, tipo from carro where tipo = ?"
            const [results] = await connection.execute(sql, [tipo])
            return results
        } finally {
            await connection.end()
        }
    }

    // Listar por id
    static async getCarrosById(id) {
        const connection = await CarroDB.connect()
        try {
            const sql = "select * from carro where id = ?"
            const [results] = await connection.execute(sql, [id])
            return results[0] || null // Retorna o objeto ou null se não achar
        } finally {
            await connection.end()
        }
    }

    // Salvar no banco de dados
    static async save(carro) {
        const connection = await CarroDB.connect()
        try {
            const sql = "insert into carro set ?"
            // Nota: .query é usado aqui pois o .execute nem sempre lida bem com objetos diretos para 'set ?'
            const [results] = await connection.query(sql, carro)
            carro.id = results.insertId
            return carro
        } finally {
            await connection.end()
        }
    }

    // Atualizar banco de dados
    static async update(carro) {
        const connection = await CarroDB.connect()
        try {
            const sql = "update carro set ? where id = ?"
            await connection.query(sql, [carro, carro.id])
            return carro
        } finally {
            await connection.end()
        }
    }

    // Deletar um carro no BD by ID direto
    static async deleteById(id) {
        const connection = await CarroDB.connect()
        try {
            const sql = "delete from carro where id = ?"
            const [results] = await connection.execute(sql, [id])
            return results.affectedRows
        } finally {
            await connection.end()
        }
    }
}
