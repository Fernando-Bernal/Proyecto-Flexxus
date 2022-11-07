import { Link } from "react-router-dom";
import "./Ejercicio2.css";

function ejercicio2() {
	function cargar(sueldos) {
		for (let i = 0; i < sueldos.length; i++) {
			let v = prompt("Ingrese sueldo:");
			sueldos[i] = parseInt(v);
		}
	}

	function mostrarSueldos(sueldos) {
		let resultado = [];
		for (let i = 0; i < sueldos.length; i++) {
			resultado.push(sueldos[i]);
		}
		return resultado;
	}

	let sueldos = new Array(5);
	cargar(sueldos);
	const sueldosA = mostrarSueldos(sueldos);

	return (
		<div>
			<h5>
				2. Realizar un programa que ingrese los sueldos de 5 operarios en un
				vector. Realizar la creación y carga del vector en el constructor. Crear
				un método para imprimir el vector.
			</h5>
			<div className="div-solucion">
				<p>Los sueldos ingresadons son:</p>
				{sueldosA.map((e) => e + "  ")}
			</div>
			<div className="form_button-home">
				<Link to="/">
					<button class="btn">Volver al Home</button>
				</Link>
			</div>
		</div>
	);
}

export default ejercicio2;
