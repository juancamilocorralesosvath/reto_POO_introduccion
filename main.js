class Persona{  

    constructor(nombre, apellido, edad, sexo, peso, altura){ 
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){ 
        /* IMC = Peso (kg) / altura (m)2 */

        return `tu IMC es de ${this.peso / (this.altura * this.altura)}`

    }

    esMayorDeEdad(){ 
        if(this.edad >= 18){ 
           return  `es mayor de edad`
        }else{ 
            return `es menor de edad`;
        }

    }
    generarID(){ 

        let CURRENT_YEAR = 2020;

        let limite = 3;
        let ID = "";
        for(let i = 0; i< limite; i++){
            ID += this.nombre.charAt(i);
        }
        for(let j = 0; j < limite; j++){ 
            ID += this.apellido.charAt(j);
        }

        ID += `${CURRENT_YEAR - this.edad }`;
        ID += this.sexo;

        return ID;

    }
}

const juan = new Persona("Juan", "Corrales", 18, "Male", 60, 1.75);

console.log(juan.calcularIMC());
console.log(juan.esMayorDeEdad());
console.log(juan.generarID());
