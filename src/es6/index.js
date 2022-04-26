class armas{
    constructor({
        sise,
        color,
        type,
        mark,
        parts = {}
    } )  
    {      
    this._sise = sise;
    this._color = color;
    this._type = type;
    this._mark = mark;   
    this._parts = parts;
    }


    get sise1(){
        return this._sise
    }
    set sise1(a){
        this._sise = a
    }


    imprimir() {
        console.log(this.sise1)
}
}

var rocketLauncher  = new armas({
    sise:"big",
        color:"black",
        type:"explosive",
        mark:"magnum",
        parts:{
            screw:5,
            mira:"red that"
        }
}) 
const ab = {}
for (a in rocketLauncher){
    ab[a] = rocketLauncher[a]
}
const ac = Object.create(rocketLauncher)//Copiamos objetos y su proto

const ad = Object.assign({},rocketLauncher) //Copiamos objetos y sus atributos

const af = JSON.stringify(rocketLauncher) //Copiamos  objetos y convertimos a string
const az = JSON.parse(af) // Copiamos objetos y convertimos a parse, ideal para arreglar el copia de string
const aq = Object.defineProperty(az, "_color",{ //Definimos y creamos atributos y tambien configuramos su proto
    value:"orange",
    configurable:false
})
Object.seal (ad) //Con este metodo impedimos que se pueda borrar los atributos
const isSeal = Object.isSealed(ad) //Con este metodo preguntamos si ha pasado por seal

Object.freeze (ac) //Con este metodo impedimos que se pueda borrar y modificar 
const isFroz = Object.isFrozen(ac) //Con este metodo preguntamos si ha sido pasado por freeze
console.log(rocketLauncher)
console.log(ac)
console.log(ad)
console.log(af)
console.log(az)
console.log(isSeal)
console.log(isFroz)



