class Estudante {
    constructor(nome, idade, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.ativo = true;
    }

    desativar() {
        this.ativo = false;
    }

    reativar() {
        this.ativo = true;
    }

    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Matrícula: ${this.matricula}, ${this.ativo ? 'Ativo' : 'Inativo'}`;
    }
}

class GerenciamentoEstudantes {
    constructor() {
        this.estudantes = [];
    }

    adicionarEstudante(estudante) {
        this.estudantes.push(estudante);
    }

    mostrarEstudantes() {
        if (this.estudantes.length === 0) {
            console.log("Nenhum estudante cadastrado.");
        } else {
            this.estudantes.forEach(estudante => console.log(estudante.toString()));
        }
    }

    encontrarEstudante(matricula) {
        return this.estudantes.find(e => e.matricula === matricula);
    }

    desativarEstudante(matricula) {
        const estudante = this.encontrarEstudante(matricula);
        if (estudante) {
            estudante.desativar();
            console.log(`Estudante com matrícula ${matricula} desativado.`);
        } else {
            console.log(`Estudante com matrícula ${matricula} não encontrado.`);
        }
    }

    reativarEstudante(matricula) {
        const estudante = this.encontrarEstudante(matricula);
        if (estudante) {
            estudante.reativar();
            console.log(`Estudante com matrícula ${matricula} reativado.`);
        } else {
            console.log(`Estudante com matrícula ${matricula} não encontrado.`);
        }
    }
}



const gerenciamento = new GerenciamentoEstudantes();

const estudante1 = new Estudante("João", 20, "2023001");
const estudante2 = new Estudante("Maria", 22, "2023002");

gerenciamento.adicionarEstudante(estudante1);
gerenciamento.adicionarEstudante(estudante2);

console.log("Estudantes cadastrados:");
gerenciamento.mostrarEstudantes();

console.log("\nDesativando estudante com matrícula 2023001:");
gerenciamento.desativarEstudante("2023001");

console.log("\nEstudantes após desativação:");
gerenciamento.mostrarEstudantes();

console.log("\nReativando estudante com matrícula 2023001:");
gerenciamento.reativarEstudante("2023001");

console.log("\nEstudantes após reativação:");
gerenciamento.mostrarEstudantes();
