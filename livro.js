class Livro{
    constructor(titulo, autor, anoPublicacao){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
}

const livros = []

function adicionarLivro(livro){
    livros.push(livro)
    console.log("livro adicionado")
}
function removerLivro(titulo){
    const index = livros.findIndex (livro => livro.titulo === titulo)
    if (index !== -1){
        const livroRemovido = livros.splice(index, 1[0])
        return true
    }
    return false
}

module.exports = {Livro, adicionarLivro, livros}