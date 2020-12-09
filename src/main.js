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
}

let app = new App();

console.log(app.sumatoriaSerieUno(7));

console.log(app.sumatoriaSerieDos(7));