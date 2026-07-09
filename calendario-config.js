// 1. Configura aquí los eventos del mes actual de forma directa
const eventosDelMes = {
    15: [
        { hora: "19:00", titulo: "Control Atletismo", seccion: "atletismo" }
    ],
    28: [
        { hora: "20:30", titulo: "Asamblea General", seccion: "club" },
        { hora: "21:00", titulo: "Cena de socios", seccion: "club" } // Puedes meter más de uno el mismo día
    ]
};

// 2. Configura cuántos días tiene este mes y en qué día de la semana empieza
const infoMesActual = {
    totalDias: 30,      // Cambia a 31, 30 o 28 según el mes
    empiezaEnDia: 1    // 1: Lunes, 2: Martes, 3: Miércoles, 4: Jueves, 5: Viernes, 6: Sábado, 7: Domingo
};
