function ejercicio2(){
    function cargar(sueldos) {
        for (let i = 0; i < sueldos.length; i++) {
            let v = prompt('Ingrese sueldo:');
            sueldos[i] = parseInt(v);
        }
    }
    
    function mostrarSueldos(sueldos) {
        document.write('Listado de sueldos<br>');
        for (let i = 0; i < sueldos.length; i++) {
            document.write(sueldos[i] + '<br>');
        }
    }
    
    let sueldos = new Array(5);
    cargar(sueldos);
    mostrarSueldos(sueldos);


    return(
        <div >
            <h5>2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector.</h5>
        </div>
    )
    
}


export default ejercicio2