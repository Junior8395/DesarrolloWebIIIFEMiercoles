
let alumnos = {
    nombre:"Junior",
    edad:17,
    mostrar:()=>{
        return `Soy ${alumnos.nombre} y tengo ${alumnos.edad}`;
    }
};
let saludo = `Hola, ${alumnos.mostrar()}, cómo estás?`
ReactDOM.render(
    <div className="row"> 
        <div className="col-6 bg-primary text-white text-center p-4">
            Aquí estamos dentro de react {alumnos.mostrar()}
        </div>
    </div>,
    document.getElementById('root')
);