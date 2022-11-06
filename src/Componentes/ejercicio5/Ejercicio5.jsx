import './Ejercicio5.css'
import {Link} from 'react-router-dom'


function Ejercicio5(){

    return(
        <div>
            <h5 className='h5'>• Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)</h5>
            <p>SELECT nombres FROM empleados ORDER BY nombres desc</p>
            <h5 className='h5'>• Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.</h5>
            <p>-</p>
            <h5 className='h5'>• Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’</h5>
            <p>SELECT nombres FROM empleados WHERE nombres LIKE '%o'</p>
            <h5 className='h5'>• Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.</h5>
            <p>-</p>
            <h5 className='h5'>• Visualizar los departamentos con más de 5 empleados</h5>
            <p>SELECT departamentoId, COUNT(*) FROM empleados GROUP BY departamentoId HAVING COUNT(*) > 5</p>
            <h5 className='h5'>• Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’. </h5>
            <p>-</p>
            <h5 className='h5'>• Calcula el sueldo medio de todos los empleados</h5>
            <p>SELECT AVG(sueldo) FROM empleados</p>
            <h5 className='h5'>• ¿Cuál es el máximo sueldo de los empleados del departamento 10?</h5>
            <p>SELECT MAX(sueldo) FROM empleados WHERE departamentoId = 10</p>
            <h5 className='h5'>• Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’</h5>
            <p>-</p>
            <h5 className='h5'>• Para cada puesto obtener la suma de sueldos.</h5>
            <p>SELECT puestoId, SUM(sueldo) FROM empleados GROUP BY puestoId</p>
            <div className="form_button-home">
					<Link to="/">
						<button class="btn">Volver al Home</button>
					</Link>
				</div>
        </div>
    )
}

export default Ejercicio5;