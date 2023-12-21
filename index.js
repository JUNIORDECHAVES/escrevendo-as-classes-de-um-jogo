class hero {
    //propriedades: nome, idade, tipo . em um construtor
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = ""
        this.ataque = ""
    }
    //criando um método para escolher os tipos
    escolherTipo(tipo) {
        const tiposPermitidos = ['guerreiro', 'mago', 'monge', 'ninja'];
        //usando estrutura de decisão para escolher o tipo e colocar um erro caso o tipo não for aceito
        if (tiposPermitidos.includes(tipo)) {
            this.tipo = tipo;
            console.log(`${this.nome} escolheu ser um ${this.tipo}.`);
        } else {
            console.error('Tipo de herói inválido');
        }
        this.definirAtaque()
    }

    //escolhendo o ataque de acordo com o seu tipo
    definirAtaque() {
        switch (this.tipo) {
            case 'guerreiro':
                this.ataque = 'espada';
                break;
            case 'mago':
                this.ataque = 'magia';
                break;
            case 'monge':
                this.ataque = 'artes marciais';
                break;
            case 'ninja':
                this.ataque = 'shuriken';
                break;
            default:
                console.error('Tipo de herói inválido');
        }
    }
    // finalização colocando uma mensagem!
    ataqueDoHero() {
        if (this.tipo) {
            console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
        }
        else{
            console.error(`algo não está certo, verifique se o tipo esta correto`)
        }
    }
}

let myHero = new hero("Junior", 20)

myHero.escolherTipo("ninja");

myHero.ataqueDoHero()