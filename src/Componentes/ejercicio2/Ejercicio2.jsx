function ejercicio2(){
    

    function cargar() {
        for (let i = 0; i < sueldos.length; i++) {
            let monto = prompt('Ingrese sueldo:');
            sueldos[i] = parseInt(monto);
        }
    }
    
    function mostrarSueldos() {
        document.write('Listado de sueldos<br>');
        for (let i = 0; i < sueldos.length; i++) {
            return (sueldos[i] + '<br>');
        }
    }
    
    let sueldos 
    sueldos = new Array(2) 
    cargar()
    mostrarSueldos()
    
    return(
        <div>
            <h5>2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector.</h5>
            <div>
            </div>
        </div>
    )
}


export default ejercicio2