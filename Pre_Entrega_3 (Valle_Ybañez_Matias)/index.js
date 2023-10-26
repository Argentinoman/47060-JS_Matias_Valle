let bruto = 0;
let neto = 0;
let ganancias = false;
let menu = parseInt(prompt("Bienvenidos al simulador de sueldos V2: \n1. Calcular Sueldo Neto \n2. Paga Ganancias? \n3. Calcular Aguinaldo\n4. Agregar empleado \n5. Buscar empleado por nombre \n6. Filtrar empleados por sueldo mínimo \n0.Salir"));
let bandera = true;

function jubilacion(a) {
    let b = parseFloat(a * 0.11).toFixed(2);
    return b;
}

function obraSocial(a) {
    let b = parseFloat(a * 0.03).toFixed(2);
    return b;
}

function inssjp(a) {
    let b = parseFloat(a * 0.03).toFixed(2);
    return b;
}

function descuentos(a, b, c) {
    let d = parseFloat(a + b + c).toFixed(2);
    return d;
}

function sueldoNeto(a) {
    let b = jubilacion(a);
    let c = obraSocial(a);
    let d = inssjp(a);
    let e = descuentos(b, c, d);
    let f = parseFloat(a - e).toFixed(2);
    return f;
}

let empleados = [];

function agregarEmpleado() {
    let nombre = prompt("Ingrese el nombre del empleado:");
    let sueldoBruto = parseInt(prompt("Ingrese el sueldo bruto del empleado:"));

    let empleado = {
        nombre: nombre,
        sueldoBruto: sueldoBruto
    };

    empleados.push(empleado);
    console.log(`Empleado ${nombre} agregado con sueldo bruto de $${sueldoBruto}`);
    alert(`Empleado ${nombre} agregado con sueldo bruto de $${sueldoBruto}`);
}

function buscarEmpleadoPorNombre(nombre) {
    let empleadoEncontrado = empleados.find(empleado => empleado.nombre === nombre);
    if (empleadoEncontrado) {
        console.log(`Empleado ${empleadoEncontrado.nombre} encontrado con sueldo bruto de $${empleadoEncontrado.sueldoBruto}`);
        alert(`Empleado ${empleadoEncontrado.nombre} encontrado con sueldo bruto de $${empleadoEncontrado.sueldoBruto}`);
    } else {
        console.log(`Empleado ${nombre} no encontrado en la lista.`);
        alert(`Empleado ${nombre} no encontrado en la lista.`);
    }
}

function filtrarEmpleadosPorSueldoMinimo(sueldoMinimo) {
    let empleadosFiltrados = empleados.filter(empleado => empleado.sueldoBruto >= sueldoMinimo);
    console.log(`Empleados con sueldo bruto mayor o igual a $${sueldoMinimo}:`);
    alert(`Empleados con sueldo bruto mayor o igual a $${sueldoMinimo}:`);
    empleadosFiltrados.forEach(empleado => {
        console.log(`${empleado.nombre}: $${empleado.sueldoBruto}`);
        alert(`${empleado.nombre}: $${empleado.sueldoBruto}`);
    });
}

// Menu 
while (menu !== 0) {
    if (menu === 1) {
        let bruto = parseInt(prompt("Opcion 1: Ingrese el sueldo Bruto"));
        let neto = sueldoNeto(bruto);
        console.log(`Su sueldo neto es de $${neto}`);
        alert(`Su sueldo neto es de $${neto}`);
    } else if (menu === 2) {
        let ganancias = parseInt(prompt("Opcion 2: Ingrese el sueldo Bruto"));
        if (ganancias >= 408000) {
            console.log(`Usted Paga Ganancias`);
            alert("Usted Paga Ganancias");
        } else {
            console.log(`Usted NO Paga Ganancias`);
            alert("Usted NO Paga Ganancias")
            bandera = false;
        }
    } else if (menu === 3) {
        let aguinaldo = parseInt(sueldoNeto(prompt("Opcion 3: Ingrese el sueldo Bruto")) / 2);
        console.log(`Su Aguinaldo de $${aguinaldo}`);
        alert(`Su Aguinaldo de $${aguinaldo}`);
    } 
    else if (menu === 4) {
        agregarEmpleado();
    } else if (menu === 5) {
        let nombreEmpleado = prompt("Opcion 5:Ingrese el nombre del empleado a buscar:");
        buscarEmpleadoPorNombre(nombreEmpleado);
    } else if (menu === 6) {
        let sueldoMinimo = parseInt(prompt("Opcion 6:Ingrese el sueldo mínimo para filtrar empleados:"));
        filtrarEmpleadosPorSueldoMinimo(sueldoMinimo);
    } else if (menu === 0) {
        break; // Salir del bucle de empleados
    }else {
        alert(`Ingrese una opcion valida`);
    }

    menu = parseInt(prompt("Quiere continuar? \n1. Calcular Sueldo Neto \n2. Paga Ganancias? \n3. Calcular Aguinaldo\n4. Agregar empleado \n5. Buscar empleado por nombre \n6. Filtrar empleados por sueldo mínimo \n0.Salir"));
}

