import {Link} from 'react-router-dom'
import './Ejercicio1.css'
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
            <div>
            <div className="form_button-home">
                <Link to= '/' ><button class="btn">Volver al Home</button> 
                </Link>
            </div>
            </div>
        </div>
    )
        

}

export default impares;