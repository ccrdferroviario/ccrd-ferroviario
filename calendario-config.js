// ==========================================
// CONFIGURACIÓN MANUAL DEL CALENDARIO DEL CLUB
// ==========================================

// 1. Añade aquí las actividades en el número de día correspondiente
const eventosDelMes = {
    15: [
        { hora: "19:00", titulo: "Control Atletismo", seccion: "atletismo" }
    ],
    28: [
        { hora: "20:30", titulo: "Asamblea General", seccion: "club" },
        { hora: "21:00", titulo: "Cena de socios", seccion: "club" }
    ]
};

// 2. Ajusta los días totales y el día de inicio de este mes
const infoMesActual = {
    totalDias: 30,      // Pon 28, 29, 30 o 31 según el mes
    empiezaEnDia: 1    // 1:Lunes, 2:Martes, 3:Miércoles, 4:Jueves, 5:Viernes, 6:Sábado, 7:Domingo
};


// ==========================================
// MOTOR DEL CALENDARIO (DIBUJA LA REJILLA)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const contenedorDias = document.getElementById('calendar-days');
    if (!contenedorDias) return;

    // Limpiamos los días de prueba que estuvieran escritos en el HTML
    contenedorDias.innerHTML = ''; 

    // 1. Generamos los huecos vacíos para que el día 1 caiga en su día de la semana correcto
    const huecosIniciales = infoMesActual.empiezaEnDia - 1;
    for (let i = 0; i < huecosIniciales; i++) {
        contenedorDias.innerHTML += `<div class="dia-calendario vacio"></div>`;
    }

    // 2. Dibujamos los días del mes uno a uno
    for (let dia = 1; dia <= infoMesActual.totalDias; dia++) {
        let htmlEventos = "";
        let claseExtra = "";

        // Comprobamos si hay eventos anotados para este número de día
        if (eventosDelMes[dia]) {
            claseExtra = " con-evento"; // Clase CSS para iluminar el día
            
            // Construimos la lista de etiquetas de eventos para este día
            eventosDelMes[dia].forEach(evento => {
                const claseSeccion = (evento.seccion || 'club').toLowerCase();
                htmlEventos += `
                    <div class="evento-tag-mini ${claseSeccion}" title="${evento.hora} - ${evento.titulo}">
                        <span class="ev-hora">${evento.hora}</span> ${evento.titulo}
                    </div>
                `;
            });
        }

        // Inyectamos la celda del día en la rejilla
        contenedorDias.innerHTML += `
            <div class="dia-calendario${claseExtra}">
                <span class="numero-dia">${dia}</span>
                <div class="bloque-eventos-dia">${htmlEventos}</div>
            </div>
        `;
    }
});
