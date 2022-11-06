import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
	return (
		<div className="div-gral">
			<div className="div-titulo">
				<h2>Prueba tecnica Flexxus</h2>
			</div>
			<div>
				<ol className="Lista">
					<li>
						<Link to="/Ejercicio1">
							Crear un algoritmo que muestre los números impares entre el 0 y el
							100
						</Link>
					</li>
					<li>
						<Link to="/Ejercicio2">
							Realizar un programa que ingrese los sueldos de 5 operarios en un
							vector. Realizar la creación y carga del vector en el constructor.
							Crear un método para imprimir el vector.
						</Link>
					</li>
					<li>
						<Link to="/Ejercicio3">
							Plantear una clase llamada Alumno y definir como atributos su
							nombre y su edad. En el constructor realizar el ingreso de datos.
							Definir otros dos métodos para imprimir los datos ingresados y un
							mensaje si es mayor o no de edad{" "}
						</Link>
					</li>
					<li>
						<Link to="/Ejercicio4">
							JavaScript ES6: Dados los siguientes array, imprimir por consola
							los elementos del array “y” que no se encuentran en el array “x”
							utilizando para tal fin una única línea de código.{" "}
						</Link>
					</li>
					<li>
						<Link to="/Ejercicio5">
							Dada la siguiente base de datos relacional: RESUELVA LAS
							SIGUIENTES CONSULTAS EN SQL
						</Link>
					</li>
					<li>
						<Link to="/Ejercicio6">
							Plasmar en código la creación de un listado de productos con una
							búsqueda por descripción y código. Se valora manejo de estados
							entre componentes y uso de hooks.
						</Link>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Home;
