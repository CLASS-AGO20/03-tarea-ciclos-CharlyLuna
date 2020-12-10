export default class App {

    sumatoriaSerieUno(numero) {
        let suma = 0;
        for(let i = 1; i <= numero; i = i + 1 ) {
            suma = suma + 1 / i;
        }
        return suma;
    }

    sumatoriaSerieDos(numero) {
        let suma = 1;
        let i = 2;
        let impares = 0;
        while(i <= numero) {
            if( i % 2 === 0) {
                suma = suma + 1 / i;
            } else {
                impares = impares + 1 / i;
            }
            i++; 
        }   
        return suma - impares;
    }

    esPrimo(numero) {
        let i = 2;
        let primo = true;
        do {
            if(numero % i === 0) {
                primo = false;
            } 
            i++;     
        } while(i < numero)
        
        if(numero == 2) {
            return true;
        } else if(numero == 1) {
            return false;
        }
        return primo;
    }

    obtenerMultiplos(inicio,fin) {
        let i = inicio;
        let multiplos3 = "";
        do {
            if(i % 3 === 0) {
                multiplos3 = multiplos3 + String(i);
            }
            i++;
        } while(i <= fin)
        return multiplos3;
    }

    obtenerImpares(numero1,numero2) {
        let i;
        let impares = "";
        let final;
        if(numero1 < numero2) {
            i = numero1;
            final = numero2;
        } else {
            i = numero2;
            final = numero1;
        }
        do {
            if(i % 2 !== 0) {
                impares =  String(i) + "," + impares ;
            }
            i++;
        } while(i <= final)
        impares = impares.substr(0, impares.length - 1);
        return impares;
    }

}

let app = new App();
// Comprobacion sumatoriaSerieUno
console.log(app.sumatoriaSerieUno(7));
// Comprobacion sumatoriaSerieDos
console.log(app.sumatoriaSerieDos(7));
// Comprobacion esPrimo
console.log(app.esPrimo(7));
// Comprobacion obtenerMultiplos
console.log(app.obtenerMultiplos(1,9));
// Comprobacion obtenerImpares
console.log(app.obtenerImpares(8,2));
console.log(app.obtenerImpares(2,8));
console.log(app.obtenerImpares(2,12));