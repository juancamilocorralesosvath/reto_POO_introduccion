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

// segunda parte 

class Password{ 

    // hacer esto esta correcto?
    constructor(longitud){ 
      if(longitud.length >= 8){ 
          this.longitud = longitud;

      }else{ 
          console.log("lo sentimos, tu password debe ser mayor a 8 caracteres, intenta de nuevo.");
      }
    }

    esFuerte(password){ 
        let contMAYUSCULAS = 0;
        let cont_minusculas = 0;
        let contNumeros = 0;

       let letters = password.match(/\D/g);
       console.log(letters);
       let numbersInPassword = password.match(/\d+/g);
        console.log(numbersInPassword);

        for(let i = 0; i < letters.length; i++){ 
          if(letters[i] === letters[i].toUpperCase()){
              console.log('Mayuscula: '+letters[i]); 
              contMAYUSCULAS++;
          }else if(letters[i] === letters[i].toLowerCase()){
            console.log('minuscula: '+letters[i]);
              cont_minusculas++; 
          }
        }
        // para los numeros
        for(let j = 0; j < numbersInPassword[0].length; j++){  
            contNumeros++;
        }
        console.log('la cantidad de numeros es: '+contNumeros);

        if(contMAYUSCULAS > 2 && cont_minusculas > 1 && contNumeros > 5){
            return "the password is STRONG!"; 

        }else{ 
            return "the password is WEAK, ;(";
        } 
    }
}

let prueba = new Password(10);
console.log(prueba.esFuerte('HOAab123456'));

console.log(prueba.esFuerte('hola123H'));
console.log(prueba.esFuerte('YTRFjng7890653'));
