

let classes =[
    {"Name": "John Snow" ,"age": "28", "tipo" : "Guerreiro"}  ,
    {"Name": "Hermione Granger", "age": "43", "tipo": "Mago" },
    {"Name": "Jet Li", "age": "35", "tipo": "Monge" },
    {"Name": "Masashi Kishimoto", "age": "45", "tipo": "Ninja"}
]
let ataque = [ "Espada","Magia","Artes marciais","Shuriken"]


   


partida(classes)
function partida (classes){
    for (let t = 0; t <= 3; t++) {
        let personagemEscolhido = classes[t];
      
      
    

    if (personagemEscolhido.tipo === "Guerreiro"){
        tipoAtq = ataque[0]}
    else if(personagemEscolhido.tipo === "Mago"){
        tipoAtq = ataque[1]}
    else if(personagemEscolhido.tipo === "Monge"){
        tipoAtq = ataque[2]}    
    else {
            tipoAtq = ataque[3]}
    console.log(`O ${personagemEscolhido.tipo} ${personagemEscolhido.Name} atacou usando ${tipoAtq}`)}
    

}