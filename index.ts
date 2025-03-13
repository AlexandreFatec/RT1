import Descritor from './descritorEmpresa'
import Empresa from './empresa'
import Endereco from './endereco'
import Funcionario from './funcionario'
import Telefone from './telefone'

let endereco = new Endereco(123,`Av Paulista`,`Jd Paulista`,`SP`)
let telefone = new Telefone(`11`,`12345678`)
let funcionario = new Funcionario(`Tony Stark`,`12345678`,`365.355.252-00`, endereco, telefone)
let funcionario2 = new Funcionario(`Steve Rogers`, `23456789`, `234.567.890-11`, endereco, telefone);
let funcionario3 = new Funcionario(`Natasha Romanoff`, `34567890`, `345.678.901-22`, endereco, telefone);
let funcionarios = [funcionario, funcionario2, funcionario3]
let telefones = [telefone]
let empresa = new Empresa(funcionarios, endereco, `ABC LTDA`,`Mercado Online`,`999.999.999-99`, telefones)

let descritor = new Descritor();
descritor.descrever(empresa);
