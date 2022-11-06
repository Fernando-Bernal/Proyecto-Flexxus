import { Link } from "react-router-dom";
class Alumno {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	renombre() {
		return `El nombre del alumno es ${this.nombre}`;
	}
	años() {
		return `La edad del alumno es ${this.edad}`;
	}
	mayor() {
		if (this.edad >= 18) {
			return `El alumno ${this.nombre} es mayor de edad ya que tiene ${this.edad} años`;
		} else {
			return `El alumno ${this.nombre} es menor de edad ya que tiene ${this.edad} años`;
		}
	}
}
function ejercicio3() {
	let nombreAlumno = prompt("Ingrese nombre:");
	let edadAlumno = prompt("Ingrese edad:");

	const nuevoAlumno = new Alumno(nombreAlumno, edadAlumno);
	return (
		<div>
			<h4>{nuevoAlumno.renombre()}</h4>
			<p>{nuevoAlumno.años()}</p>
			<p>{nuevoAlumno.mayor()}</p>
			<div className="form_button-home">
				<Link to="/">
					<button class="btn">Volver al Home</button>
				</Link>
			</div>
		</div>
	);
}
export default ejercicio3;
