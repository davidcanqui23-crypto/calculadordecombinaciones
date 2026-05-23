document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCalcular").addEventListener("click", calcularSorteo);
    calcularSorteo();
});

function calcularFactorial(n) {
    if (n < 0) return 0;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function obtenerCombinaciones(n, r) {
    if (r > n || r < 0) return 0;
    
    const factorialN = calcularFactorial(n);
    const factorialR = calcularFactorial(r);
    const factorialNR = calcularFactorial(n - r);
    
    return factorialN / (factorialR * factorialNR);
}

function calcularSorteo() {
    const n1 = parseInt(document.getElementById("n1").value) || 0;
    const r1 = parseInt(document.getElementById("r1").value) || 0;
    const n2 = parseInt(document.getElementById("n2").value) || 0;
    const r2 = parseInt(document.getElementById("r2").value) || 0;

    const combinacionesGrupo1 = obtenerCombinaciones(n1, r1);
    const combinacionesGrupo2 = obtenerCombinaciones(n2, r2);

    const totalCombinacionesSorteo = combinacionesGrupo1 * combinacionesGrupo2;

    const formateador = new Intl.NumberFormat('es-ES');

    document.getElementById("resGrupo1").textContent = formateador.format(combinacionesGrupo1);
    document.getElementById("resGrupo2").textContent = formateador.format(combinacionesGrupo2);
    document.getElementById("resTotal").textContent = formateador.format(totalCombinacionesSorteo);
}