function ejercicio4(){

    const x = ["n", "bro", "c", "|"];
    const y = ["d", "n", "l", "bro", "g"]; 

    let resultado = y.filter(e=> !x.includes(e))


    return(
        <div>
            <h5>4. JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código.</h5>
            <div>
                <p>const x = ["n", "bro", "c", "|"]</p>
                <p>const y = ["d", "n", "l", "bro", "g"]</p>

            </div>
            <div>
                <p>Resuldado:</p>
                {resultado}
            </div>
        </div>
    )
}

export default ejercicio4;