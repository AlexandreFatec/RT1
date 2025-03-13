export default class Funcionario {
    public nome: string 
    public numero: string
    public cpf: string
 
    constructor(nome: string, numero: string, cpf: string) {
        this.nome = nome;
        this.numero = numero;  
        this.cpf = cpf;
    }
}