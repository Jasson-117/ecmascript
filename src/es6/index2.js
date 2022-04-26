function requiredParam(param){  //Con esta funcion pedimmos parametros obligatorios
    throw new Error(param + "Este parametro es obligatorio")
}
function createWeapond (
   { sise = requiredParam("sise"),
        color = requiredParam("color"),
        type = requiredParam("type"),
        mark = requiredParam("mark"),
        parts = {}} ={}
){
    const private = {
        "_sise":sise,
    }
    const public = {    
        color,
        type,
        mark,
        parts,
        readSise(){
            return private._sise
        },
        changeSise(a){
            private._sise = a
        }
    }
    return public
}

function requiredParam(param){
    throw new Error(param + "Este parametro es obligatorio")
}

const ak47 = createWeapond({
        sise:"big",
        color:"brown",
        type:"Fusil",
        mark:"rocket",
        parts:{
            screws:18,
            mira:"reflex"
        }
})
console.log(ak47.sise)