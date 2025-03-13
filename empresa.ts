export default class Empresa {
    public razaoSocial: string;
    public nomeFantasia: string;
    public cnpj: string;
 
    constructor(razaoSocial: string, nomeFantasia: string, cnpj: string) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;  
        this.cnpj = cnpj;
    }

}

