var name = process.argv[2];
sayHello(getName());


function getName(){
    return process.argv[2]||"";  //se nao tiver nada dentro do process arg ,vai retornar isso  ""
}

function sayHello(name){
    console.log("Hi dear!"+name);

}