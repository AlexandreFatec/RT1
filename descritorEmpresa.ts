import Empresa from './empresa';

export default class Descritor {

    public descrever(empresa: Empresa){

        console.log(`Razao Social: ${empresa.razaoSocial}`);
        console.log(`Nome fantasia: ${empresa.nomeFantasia}`);
        console.log(`CNPJ: ${empresa.cnpj}`);
        console.log('Endereço:');
        console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Numero: ${empresa.endereco.numero}\n`);

        console.log('Funcionarios:');
        empresa.funcionarios.forEach(funcionario => {
            console.log(`Nome: ${funcionario.nome}`);
            console.log(`Matrícula: ${funcionario.matricula}`);
            console.log(`CPF: ${funcionario.cpf}`);
            console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Numero: ${empresa.endereco.numero}\n`);
        });
    }
}
