class Alumno{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    renombre(){
        return `El nombre del alumno es ${this.nombre}`
    }
    años(){
        return `La edad del alumno es ${this.edad}`
    }
    mayor(){
        if(this.edad >= 18){
            return `El alumno ${this.nombre} es mayor de edad ya que tiene ${this.edad} años`
        }
        else{
            return `El alumno ${this.nombre} es menor de edad ya que tiene ${this.edad} años`
        }
    }
}
function ejercicio3(){
 
 let nombreAlumno = prompt('Ingrese nombre:');
 let edadAlumno = prompt('Ingrese edad:');

 const nuevoAlumno = new Alumno(nombreAlumno, edadAlumno)
return(
 <div>
  <h1>{nuevoAlumno.renombre()}</h1>
  <p>{nuevoAlumno.años()}</p>
  <p>{nuevoAlumno.mayor()}</p>

 </div>
)
}
export default ejercicio3