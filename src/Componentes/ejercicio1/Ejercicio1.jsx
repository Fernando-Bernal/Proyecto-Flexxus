
function impares() {
    let numerosImpares = [] 
    
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            numerosImpares.push(`-${i}-`)
        }
    }
    
    return (
        <div>
            <h5>1. Crear un algoritmo que muestre los números impares entre el 0 y el 100. </h5>
            {numerosImpares}
        </div>
    )
        

}

export default impares;