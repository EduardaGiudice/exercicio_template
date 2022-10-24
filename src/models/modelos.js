
class Projeto {
    constructor(id, titulo, tipo, tecnologia, inicio, fim){
        this.id= id;
        this.titulo = titulo;
        this.tipo = tipo;
        this.tecnologia = tecnologia;
        this.inicio = inicio;
        this.fim = fim;
   }
}


class Pessoa{
    constructor(imagem, nome, idade){
        this.imagem = imagem;
        this.nome = nome;
        this.idade = idade;
    }

}

class Hobbie{
    constructor(nomehobbie, descricaohobbie){
        this.nomehobbie = nomehobbie;
        this.descricaohobbie = descricaohobbie;
    }
}

module.exports = {
    Projeto: Projeto,
    Pessoa: Pessoa,
    Hobbie: Hobbie
}  





