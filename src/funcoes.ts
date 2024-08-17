function multiplicaAPorB (a: number, b: number): number {
    return a * b;
}


const multiplicaCPorD = (c: number, d: number): number => c*d



class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `Olá ${this.nome}`;
    }
}