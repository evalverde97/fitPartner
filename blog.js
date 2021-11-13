let hipertrofia = {
    titulo: "Hipertrofia",
    contenido: `La hipertrofia muscular, denominada comúnmente solo como hipertrofia, es el crecimiento del músculo. Se trata de un aumento del tamaño, del número o de ambas cosas de las miofibrillas del músculo formadas por filamentos de actina y de miosina.`,
    fecha: "10/11/2021",

};
let suplementosParaGanarMusculo = {
    titulo: "Suplementos para ganar musculo",
    contenido: "Con el fin de construir el músculo y mejorar su tamaño, tenemos que crear un estímulo que nos desafíe, llevando a nuestras fibras musculares a adaptarse y crecer. Mantenernos en nuestra zona actual de confort sólo nos permitirá mantener nuestro nivel actual de fuerza y condición física. Cuando demandamos más a nuestros cuerpos es cuando se hace primordial una alimentación adecuada y una ingesta de suplementos acorde al proceso de recuperación.",
    fecha: "08/11/2021"
};

let blog = [hipertrofia, suplementosParaGanarMusculo];

function cargarBlog() {
    let contenido = "";
    for (let i = 0; i < blog.length; i++) {
        contenido += `<article class="blog_article">
        <h3>${blog[i].titulo}</h3>
        <p>${blog[i].contenido}</p>
        <p>${blog[i].fecha}</p>
        </article>`;
    }
    document.getElementById("blog").innerHTML = contenido;
}
cargarBlog();