import "./Ejercicio6.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const data = [
	{
		id: 1,
		Codigo: 1,
		Producto: "Monitor LG",
		Descripcion:
			"MONITOR 24P LG LED 24MP400 HDMI Colores auténticos desde cualquier ángulo. El panel IPS de LG ofrece colores más claros y más auténticos. El tiempo de respuesta se ha reducido, la reproducción del color ha mejorado y los usuarios pueden ver la pantalla desde prácticamente cualquier ángulo.",
	},
	{
		id: 2,
		Codigo: 2,
		Producto: "Monitor Samsung",
		Descripcion:
			"Un monitor Samsung a tu medida. Con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.",
	},
	{
		id: 3,
		Codigo: 3,
		Producto: "Teclado Logitech",
		Descripcion:
			"Teclado bluetooth Logitech Master Series MX Keys Mini QWERTY español color gris pálido con luz blanca",
	},
	{
		id: 4,
		Codigo: 4,
		Producto: "Mouse Logitech",
		Descripcion:
			"MÁS VENDIDO Mouse de juego inalámbrico Logitech G Series Lightspeed G305 black",
	},
	{
		id: 5,
		Codigo: 5,
		Producto: "Silla Escritorio",
		Descripcion: "Silla Escritorio Ergonomica Oficina Pc Sillon Negro Mesh",
	},
	{
		id: 6,
		Codigo: 6,
		Producto: "Silla Gamer",
		Descripcion: "Sillón Gamer Ergonómico Masajeador Luces Led Apoya Pie Silla",
	},
	{
		id: 7,
		Codigo: 7,
		Producto: "Auriculares",
		Descripcion: "Auriculares inalámbricos Philips 1000 Series TAH1205 negro",
	},
];

function Ejercicio6() {
	const [productos, setProductos] = useState([]);
	const [tablaProductos, setTablaProductos] = useState([]);
	const [busqueda, setBusqueda] = useState("");

	const handleInputChange = (e) => {
		setBusqueda(e.target.value);
		filtrar(e.target.value);
	};

	function filtrar(coincidencia) {
		let resultadosBusqueda = tablaProductos.filter((elemento) => {
			if (
				elemento.Codigo.toString().includes(coincidencia) ||
				elemento.Descripcion.toString()
					.toLowerCase()
					.includes(coincidencia.toLowerCase())
			) {
				return elemento;
			}
		});
		setProductos(resultadosBusqueda);
	}

	useEffect(() => {
		setTablaProductos(data);
		setProductos(data);
	}, []);

	return (
		<div className="Ejercicio6">
			<h5>
				6. Plasmar en código la creación de un listado de productos con una
				búsqueda por descripción y código. Se valora manejo de estados entre
				componentes y uso de hooks.
			</h5>
			<div className="containerInput">
				<input
					className="form-control inputBuscar"
					value={busqueda}
					placeholder="Buscador por Codigo o Descripción"
					onChange={(e) => handleInputChange(e)}
				/>
			</div>
			<div className="table-responsive">
				<table className="table table-sm table-bordered">
					<thead>
						<tr>
							<th>Codigo</th>
							<th>Producto</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						{productos.map((e) => {
							return (
								<tr key={e.id}>
									<td>{e.Codigo}</td>
									<td>{e.Producto}</td>
									<td>{e.Descripcion}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className="form_button-home">
				<Link to="/">
					<button class="btn">Volver al Home</button>
				</Link>
			</div>
		</div>
	);
}

export default Ejercicio6;
