let bruto = 0;
let neto = 0;
let ganancias = false;
let menu = parseInt(prompt("Bienvenidos al simulador de sueldos: \n1. Calcular Sueldo Neto \n2. Paga Ganancias? \n3. Calcular Aguinaldo \n0.Salir"));
let bandera = true;

function jubilacion(a){
    let b = parseFloat(a * 0.11).toFixed(2);
    return b;
};
function obraSocial(a){
    let b = parseFloat(a * 0.03).toFixed(2);
    return b;
};
function inssjp(a){
    let b = parseFloat(a * 0.03).toFixed(2);
    return b;
};
function descuentos (a,b,c){
    let d = parseFloat(a+b+c).toFixed(2);
    return d;
}
function sueldoNeto(a){
    let b = jubilacion(a);
    let c = obraSocial(a);
    let d = inssjp(a);
    let e = descuentos(b,c,d);
    let f = parseFloat(a - e).toFixed(2);
    return f;
};


while (menu !=0){

        //Calculadora NETO
        if (menu ===1){
        let bruto = parseInt(prompt("Opcion 1: Ingrese el sueldo Bruto"));
        let neto = sueldoNeto(bruto);
        alert(`Su sueldo neto es de $${neto}`);
        menu = parseInt(prompt("Quiere continuar? \n1. Calcular Sueldo Neto \n2. Paga Ganancias? \n3. Calcular Aguinaldo \n0.Salir"));
        continue;
    }
        //Paga ganancias (no encontre cual es la formula en internet)
        else if (menu ===2){
        let ganancias = parseInt(prompt("Opcion 2: Ingrese el sueldo Bruto"));
        if (ganancias >= 408000){
            alert("Usted Paga Ganancias");
            menu = parseInt(prompt("Quiere continuar? \n1. Calcular Sueldo Neto \n2. Paga Ganancias? \n3. Calcular Aguinaldo \n0.Salir"));
            continue;
        }
        else{
            alert("Usted NO Paga Ganancias")
            bandera = false;
            menu = parseInt(prompt("Quiere continuar? \n1. Calcular Sueldo Neto \n2. Paga Ganancias? \n3. Calcular Aguinaldo \n0.Salir"));
            continue;}
        
        }

        //Calculadora Aguinaldo
        else if (menu ===3){
        let aguinaldo = parseInt(sueldoNeto(prompt("Opcion 3: Ingrese el sueldo Bruto"))/2);
        alert(`Su Aguinaldo de $${aguinaldo}`);
        menu = parseInt(prompt("Quiere continuar? \n1. Calcular Sueldo Neto \n2. Paga Ganancias? \n3. Calcular Aguinaldo \n0.Salir"));
        continue;
        }

        else{
            alert(`Ingrese una opcion valida`);
            menu = parseInt(prompt("Bienvenidos al simulador de sueldos: \n1. Calcular Sueldo Neto \n2. Paga Ganancias? \n3. Calcular Aguinaldo \n0.Salir"));
            continue;
        }
};