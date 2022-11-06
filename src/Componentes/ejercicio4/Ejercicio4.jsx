import { Link } from "react-router-dom";
import "./Ejercicio4.css";
function ejercicio4() {
	const x = ["n", "bro", "c", "|"];
	const y = ["d", "n", "l", "bro", "g"];

	let resultado = y.filter((e) => !x.includes(e));

	return (
		<div>
			<h5>
				4. JavaScript ES6: Dados los siguientes array, imprimir por consola los
				elementos del array “y” que no se encuentran en el array “x” utilizando
				para tal fin una única línea de código.
			</h5>
			<div className="Ejercicio4">
				<div className="div-arr">
					<p>const x = ["n", "bro", "c", "|"]</p>
					<p>const y = ["d", "n", "l", "bro", "g"]</p>
				</div>
				<div className="div-resultado">
					<p>Resultado:</p>
					{resultado}
				</div>
				<div className="form_button-home">
					<Link to="/">
						<button class="btn">Volver al Home</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ejercicio4;
