function reloj() {
    const date = new Date();

    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();
    let horaC = hora + " : " + minuto + " : " + segundo;

    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let año = date.getFullYear();
    let diaS = date.getDay();
    let fecha = dia + " / " + mes + " / " + año;

    document.getElementById("horaC").textContent = horaC;
    document.getElementById("diaS").textContent = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][diaS];
    document.getElementById("fecha").textContent = fecha;


}

setInterval(reloj,1000);