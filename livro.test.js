const {Livro, adicionarLivro, livro} = require('./livro')

test('Adicionar novo Livro', () =>{
    const livro = new Livro('Shine', 'Jessica Jung', 2019)
    adicionarLivro(livro)
    expect(livros).toContain(livro)
})

test('remover pelo titulo', () => {
    const livro = new Livro('Shine', 'Jessica Jung', 2019)
    adicionarLivro(livro)
    removerLivro('Shine')
    expect('Livro removido')
})