class heroi{
    constructor(nome,tipo, ataque, idade) {
        
        this.nome = nome 
        this.tipo = tipo
        this.ataque = ataque
        this.idade = idade
    } 
    
    atacar (){

        console.log ( `${this.nome}, o${this.tipo}, atacou usando ${this.ataque}.`)

    }

    resgatar (){

        console.log ( `Zoltan foi ferido em batalha, mas ${this.nome} deu suporte.`)
    }
}

let descricaoHeroi = new heroi ("Geralt"," bruxo","sinal igni" )
let descricaoHeroi2 = new heroi ( "Zoltan"," anão", "um machado")


descricaoHeroi.atacar()
descricaoHeroi2.atacar()
descricaoHeroi.resgatar()