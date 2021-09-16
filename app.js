document.getElementById('Bienvenido').style.display = 'block';
document.getElementById('Hello').style.display = 'none';
document.getElementById('javascript_P1').style.display= 'none';
document.getElementById('javascript_P2').style.display= 'none';
document.getElementById('javascript_P3').style.display= 'none';
document.getElementById('Ventana_resultado').style.display= 'none';
document.getElementById('python_P1').style.display= 'none';
document.getElementById('python_P2').style.display= 'none';
document.getElementById('python_P3').style.display= 'none';
document.getElementById('graciasFin').style.display= 'none';


//Primera Alerta
const dato= document.getElementById("name");
function jugar() {
    if(dato.value===""){
        alert("Ingresa tu nombre para jugar");
    }else{
        document.getElementById('hi').innerHTML = "HOLA," + " " + dato.value.toUpperCase();
        document.getElementById('Bienvenido').style.display = 'none';
        document.getElementById('Hello').style.display = 'block';
    }
        
}

//Preguntas JavaScript
let jsess1=0;
let jsess2=0;
let jsess3=0;
//Pregunta 1 JavaScript
function quizJ(){
    document.getElementById('javascript_P1').style.display='block';
    document.getElementById('Hello').style.display= 'none';
}
//Pregunta 2 JavaScript
function javascriptSig2(){
    document.getElementById('javascript_P2').style.display = 'block';
    document.getElementById('javascript_P1').style.display = 'none';
    if(document.getElementById('js1p.0').checked === true){
        jsess1=1;
        console.log('respuesta p1'+ jsess1);
    }else{
        jsess1=0;
    }
}
//Pregunta 3 JavaScript
function javascriptSig3(){
    document.getElementById('javascript_P3').style.display = 'block';
    document.getElementById('javascript_P2').style.display = 'none';
    if(document.getElementById('js2p.0').checked === true){
        jsess2=1;
        console.log('respuesta p2'+ jsess2);
    }else{
        jsess2=0;
    }
}
//boton Resultado
function resultJS(){
    if(document.getElementById('js3p.0').checked === true){
        jsess3=1;
        console.log('respuesta p3'+ jsess3);
    }else{
        jsess3=0;
    }
    let jscorrectas=  jsess1+jsess2+jsess3;
    console.log('correctas, '+ jscorrectas);
    let jsincorrectas = 3 - jscorrectas;
    console.log('incorrectas, ' + jsincorrectas);
    document.getElementById('Ventana_resultado').style.display = 'block';
    document.getElementById('javascript_P3').style.display= 'none';
    document.getElementById('Result').innerHTML = " ¡" + dato.value.toUpperCase() + " tu resultado es!";
    document.getElementById('Correctas').innerHTML = "Tus respuestas correctas son: " + jscorrectas;
    document.getElementById('Incorrectas').innerHTML = "Tus respuestas incorrectas son: " + jsincorrectas;
}

//Botones de Volver a Jugar
//SI
function Volver(){
    document.getElementById('Ventana_resultado').style.display = 'none';
    document.getElementById('Hello').style.display = 'block';
}

//No
function Fin(){
    document.getElementById('Ventana_resultado').style.display = 'none';
    document.getElementById('graciasFin').style.display = 'block';
}
//Preguntas Python
let pyess1=0;
let pyess2=0;
let pyess3=0;
//Pregunta 1 JavaScript
function quizP(){
    document.getElementById('python_P1').style.display='block';
    document.getElementById('Hello').style.display= 'none';
}
//Pregunta 2 JavaScript
function pythonSig2(){
    document.getElementById('python_P2').style.display = 'block';
    document.getElementById('python_P1').style.display = 'none';
    if(document.getElementById('py1p.0').checked === true){
        pyess1=1;
        console.log('respuesta p1'+ pyess1);
    }else{
        pyess1=0;
    }
}
//Pregunta 3 JavaScript
function pythonSig3(){
    document.getElementById('python_P3').style.display = 'block';
    document.getElementById('python_P2').style.display = 'none';
    if(document.getElementById('py2p.0').checked === true){
        pyess2=1;
        console.log('respuesta p2'+ pyess2);
    }else{
        pyess2=0;
    }
}
//boton Resultado
function resultPY(){
    if(document.getElementById('py3p.0').checked === true){
        pyess3=1;
        console.log('respuesta p3'+ pyess3);
    }else{
        pyess3=0;
    }
    let pycorrectas=  pyess1+pyess2+pyess3;
    console.log('correctas, '+ pycorrectas);
    let pyincorrectas = 3 - pycorrectas;
    console.log('incorrectas, ' + pyincorrectas);
    document.getElementById('Ventana_resultado').style.display = 'block';
    document.getElementById('python_P3').style.display= 'none';
    document.getElementById('Result').innerHTML = " ¡" + dato.value.toUpperCase() + " tu resultado es!";
    document.getElementById('Correctas').innerHTML = "Tus respuestas correctas son: " + pycorrectas;
    document.getElementById('Incorrectas').innerHTML = "Tus respuestas incorrectas son: " + pyincorrectas;
}


