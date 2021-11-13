let userActivoEnLs = localStorage.getItem('userActivo'); // array de usuario en LS (formateado a JSON)
let userActivoParseado = JSON.parse(userActivoEnLs);

// usar variable userActivoParseado para acceder a las propiedades
const divBienvenida = $('#welcome')
divBienvenida.append(`
<h3>Bienvenido ${userActivoParseado.name}</h3>
<h5 class="centered px-10">Tu objetivo es: ${userActivoParseado.goal}</h5>
<p>Te recomendamos los siguientes consejos de alimentación según tu objetivo:</p>
`);

//validación del objetivo del user para recom. para
// hacer un array que contenga las recomendaciones como objetos ingresados en variables
function validarGoal(){
    let divRecomendacion = $('#goalRec');
    if( userActivoParseado.goal == 'ganar peso'){
        divRecomendacion.addClass('consejos');
        divRecomendacion.append(`
        <h3>Principales Alimentos que aportan energía para complementar la actividad física</h3>
        <p>Cereales integrales: fuente muy recomendable de energía porque sus hidratos de carbono  se transforman en glucosa de forma lenta. Contienen mucha fibra.</p>
        <p>Pan de centeno: por su alto contenido en vitamina del complejo B.</p>
        <p>Avena: cereal muy energético con una elevada cantidad de vitaminas B6 y B5, cuya  carencia se relaciona con los cambios de humor, dolor de cabeza y fatiga.</p>
        <p>Lentejas: fuente de proteínas y hierro. La falta de este último, muy extendida, produce  apatía, fatiga y dificultad para concentrarse.</p>
        `);} else
        {
            divRecomendacion.append(`
            <h3>No se encuentra info</h3>
        `)}
}
validarGoal();

//cerrar sesion 
const botonCerrarSesion = $('#cerrarSesion');
botonCerrarSesion.click(()=>{
    localStorage.clear();
    window.location.href = 'index.html';
});
