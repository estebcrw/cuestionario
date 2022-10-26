function resultado() {
    var p1, p2,nota;

    // 1a pregunta
    if (document.getElementById('p12').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p21').checked==true) {p2=1}
    else {p2=0}
    nota=p1+p2;
    alert(" Aciertos: " + nota);
    window.location = 'cuestionario.html'
}