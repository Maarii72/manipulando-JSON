//obj javascript
const objs =[
  {
    "nome": "Matheus",
    "idade": 30,
    "esta_trabalhando": true,
    "detalhes_profissao": {
      "profissao": "Programador",
      "empresa": "Empresa X"
    },
    "hobbies": ["Programar", "Correr", "Ler"]
  },
  {
    "nome": "João",
    "idade": 25,
    "esta_trabalhando": false,
    "detalhes_profissao": {
      "profissao": null,
      "empresa": null
    },
    "hobbies": ["jogar", "Academia"]
  }
]

//JSON
//converter objeto para json (ex:enviar dado api,post)
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

//converter json para objeto (ex:get)
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

//acesso ao obj
objData.map((pessoa) =>{
  console.log(pessoa.nome)
})