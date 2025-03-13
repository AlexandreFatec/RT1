import Empresa from './empresa'
import Endereco from './endereco'
import Funcionario from './funcionario'
import Telefone from './telefone'

let endereco = new Endereco(123,`Av Paulista`,`Jd Paulista`,`SP`)
let telefone = new Telefone(`11`,`12345678`)
let funcionario = new Funcionario(`Tony Stark`,`12345678`,`365.355.252-00`)
let empresa = new Empresa(`ABC LTDA`,`Mercado Online`,`999.999.999-99`)


console.log(endereco.mostrarEndereco())



