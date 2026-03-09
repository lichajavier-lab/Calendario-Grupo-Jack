// vehiculo: "AMBOS" | "AUTOS" | "MOTOS"
// categoria: "NAC" | "MKT" | "SECT"

export const DATA = [
  // ── ENERO ──
  { mes:"Enero",      fecha:"01/01", efemeride:"Año Nuevo",                                  categoria:"NAC",  vehiculo:"AMBOS", idea:"¡Feliz 2026! 🎉 Este año la ruta nos espera. ¿Cuál es tu próximo vehículo?" },
  { mes:"Enero",      fecha:"06/01", efemeride:"Día de Reyes",                               categoria:"MKT",  vehiculo:"AMBOS", idea:"Los Reyes Magos traen el mejor regalo: llaves de un 0km o una moto nueva 🎁" },
  { mes:"Enero",      fecha:"12/01", efemeride:"Día Mundial del Auto Eléctrico",             categoria:"SECT", vehiculo:"AUTOS", idea:"El futuro ya llegó 🔋⚡ Conocé nuestra línea de autos eléctricos e híbridos" },
  { mes:"Enero",      fecha:"17/01", efemeride:"Día del Amigo (Cono Sur)",                   categoria:"MKT",  vehiculo:"MOTOS", idea:"Nada une más que salir en moto con los amigos 🤝🏍️ ¿Con quién rodás?" },
  { mes:"Enero",      fecha:"30/01", efemeride:"Día de la Conducción Segura",                categoria:"SECT", vehiculo:"AMBOS", idea:"Manejar con cuidado es el mejor equipamiento 🛡️ #ConductorResponsable" },

  // ── FEBRERO ──
  { mes:"Febrero",    fecha:"01/02", efemeride:"Inicio de temporada de motos",               categoria:"SECT", vehiculo:"MOTOS", idea:"¡Arrancó la temporada! 🏁 Preparate para rodar todo el año con nosotros" },
  { mes:"Febrero",    fecha:"14/02", efemeride:"San Valentín",                               categoria:"MKT",  vehiculo:"AMBOS", idea:"Una escapada para dos 💘 ¿En auto o en moto? Vos elegís" },
  { mes:"Febrero",    fecha:"16/02", efemeride:"Lunes de Carnaval",                          categoria:"NAC",  vehiculo:"AMBOS", idea:"¡Feliz Carnaval! 🎊 Feriado largo, ¿ya tenés el vehículo listo para salir?" },
  { mes:"Febrero",    fecha:"17/02", efemeride:"Martes de Carnaval",                         categoria:"NAC",  vehiculo:"AMBOS", idea:"Segundo día de Carnaval 🎭 El ritmo no para, como nuestros motores" },

  // ── MARZO ──
  { mes:"Marzo",      fecha:"08/03", efemeride:"Día Internacional de la Mujer",              categoria:"MKT",  vehiculo:"AMBOS", idea:"Mujeres al volante y sobre dos ruedas: fuerza y libertad 🏁✊ #GrupoJack" },
  { mes:"Marzo",      fecha:"23/03", efemeride:"Puente turístico",                           categoria:"NAC",  vehiculo:"AMBOS", idea:"Fin de semana largo 🗺️ ¿Ya planeaste adónde ir?" },
  { mes:"Marzo",      fecha:"24/03", efemeride:"Día Nacional de la Memoria",                 categoria:"NAC",  vehiculo:"AMBOS", idea:"Un día para recordar y reflexionar 🕊️" },
  { mes:"Marzo",      fecha:"25/03", efemeride:"Día del Auto Clásico",                       categoria:"SECT", vehiculo:"AUTOS", idea:"Historia sobre ruedas 🏆 ¿Cuál es tu auto clásico favorito?" },

  // ── ABRIL ──
  { mes:"Abril",      fecha:"02/04", efemeride:"Día de los Caídos en Malvinas",              categoria:"NAC",  vehiculo:"AMBOS", idea:"Los recordamos con orgullo y respeto 🇦🇷" },
  { mes:"Abril",      fecha:"03/04", efemeride:"Viernes Santo",                              categoria:"NAC",  vehiculo:"AMBOS", idea:"Fin de semana largo de Semana Santa 🕊️ Viajá seguro" },
  { mes:"Abril",      fecha:"06/04", efemeride:"Día del Deporte del Motor",                  categoria:"SECT", vehiculo:"AMBOS", idea:"Del MotoGP al automovilismo: la velocidad en su máxima expresión 🏎️🏍️" },
  { mes:"Abril",      fecha:"22/04", efemeride:"Día de la Tierra",                           categoria:"MKT",  vehiculo:"AMBOS", idea:"Vehículos más eficientes para un planeta más sano 🌱 #SustentabilidadJack" },

  // ── MAYO ──
  { mes:"Mayo",       fecha:"01/05", efemeride:"Día del Trabajador",                         categoria:"NAC",  vehiculo:"AMBOS", idea:"A todos los que mueven el país cada día, gracias 🙌" },
  { mes:"Mayo",       fecha:"15/05", efemeride:"Día de la Familia",                          categoria:"MKT",  vehiculo:"AUTOS", idea:"Cada familia tiene su auto ideal 👨‍👩‍👧‍👦 Encontrá el tuyo en Grupo Jack" },
  { mes:"Mayo",       fecha:"21/05", efemeride:"Día de la Movilidad Urbana",                 categoria:"SECT", vehiculo:"MOTOS", idea:"La moto: la solución al tráfico urbano 🏍️🌆 Movilidad inteligente" },
  { mes:"Mayo",       fecha:"25/05", efemeride:"Revolución de Mayo",                         categoria:"NAC",  vehiculo:"AMBOS", idea:"¡Feliz 25 de Mayo! 🇦🇷 Patria sobre ruedas, siempre adelante" },

  // ── JUNIO ──
  { mes:"Junio",      fecha:"15/06", efemeride:"Día del Padre",                              categoria:"MKT",  vehiculo:"AMBOS", idea:"El mejor regalo para papá tiene ruedas 🎁 ¿Auto o moto? ¡Vos sabés cuál!" },
  { mes:"Junio",      fecha:"17/06", efemeride:"Día de Güemes (trasladado del 20/6)",        categoria:"NAC",  vehiculo:"AMBOS", idea:"En honor al General Güemes 🇦🇷 Feriado nacional" },
  { mes:"Junio",      fecha:"20/06", efemeride:"Día de la Bandera — General Belgrano",       categoria:"NAC",  vehiculo:"AMBOS", idea:"Feliz Día de la Bandera 🇦🇷 Orgullosos de ser argentinos" },
  { mes:"Junio",      fecha:"21/06", efemeride:"Inicio del Invierno",                        categoria:"SECT", vehiculo:"AMBOS", idea:"¿Tu vehículo está listo para el frío? 🧊 Tips de mantenimiento de invierno" },
  { mes:"Junio",      fecha:"26/06", efemeride:"Hot Sale",                                   categoria:"MKT",  vehiculo:"AMBOS", idea:"Las mejores ofertas del año en autos y motos 🔥 #HotSale2026 #GrupoJack" },

  // ── JULIO ──
  { mes:"Julio",      fecha:"09/07", efemeride:"Día de la Independencia",                    categoria:"NAC",  vehiculo:"AMBOS", idea:"¡Feliz 9 de Julio! Libertad sobre ruedas 🇦🇷" },
  { mes:"Julio",      fecha:"10/07", efemeride:"Puente turístico",                           categoria:"NAC",  vehiculo:"AMBOS", idea:"Fin de semana largo de invierno 🗺️ ¿A dónde salís?" },
  { mes:"Julio",      fecha:"15/07", efemeride:"Día Mundial de la Moto",                     categoria:"SECT", vehiculo:"MOTOS", idea:"¡Feliz Día de la Moto! 🏍️🔥 ¿Cuántos km llevan este año?" },
  { mes:"Julio",      fecha:"18/07", efemeride:"Vacaciones de Invierno",                     categoria:"MKT",  vehiculo:"AMBOS", idea:"Vacaciones de invierno 🗺️ El vehículo perfecto para la aventura te espera" },

  // ── AGOSTO ──
  { mes:"Agosto",     fecha:"01/08", efemeride:"Día del Niño",                               categoria:"MKT",  vehiculo:"AMBOS", idea:"Los chicos sueñan con autos y motos 🚗🏍️✨ ¿Cuál fue tu primer juguete a motor?" },
  { mes:"Agosto",     fecha:"17/08", efemeride:"Paso a la Inmortalidad del Gral. San Martín",categoria:"NAC",  vehiculo:"AMBOS", idea:"En honor al Libertador 🇦🇷 San Martín, siempre presente" },
  { mes:"Agosto",     fecha:"22/08", efemeride:"Día Mundial del Motociclismo",               categoria:"SECT", vehiculo:"MOTOS", idea:"Hoy celebramos la pasión por los dos ruedas 🏍️🌍 ¡Compartí tu foto!" },

  // ── SEPTIEMBRE ──
  { mes:"Septiembre", fecha:"15/09", efemeride:"Semana de la Seguridad Vial en Moto",        categoria:"SECT", vehiculo:"MOTOS", idea:"Esta semana recordamos: el casco no es opcional 🪖 #MotoConsciente" },
  { mes:"Septiembre", fecha:"21/09", efemeride:"Día de la Primavera / Día del Estudiante",   categoria:"MKT",  vehiculo:"AMBOS", idea:"¡Bienvenida primavera! 🌸 La estación perfecta para estrenar" },
  { mes:"Septiembre", fecha:"25/09", efemeride:"Día Mundial del Turismo",                    categoria:"MKT",  vehiculo:"AMBOS", idea:"Viajar es vivir 🗺️ ¿Con qué vehículo recorrés Argentina?" },

  // ── OCTUBRE ──
  { mes:"Octubre",    fecha:"12/10", efemeride:"Día del Respeto a la Diversidad Cultural",   categoria:"NAC",  vehiculo:"AMBOS", idea:"Diversidad en cada camino 🌍 Todos los caminos llevan a Grupo Jack" },
  { mes:"Octubre",    fecha:"16/10", efemeride:"Cyber Monday",                               categoria:"MKT",  vehiculo:"AMBOS", idea:"Ofertas digitales en autos y motos ⚡💻 #CyberMonday2026 #GrupoJack" },
  { mes:"Octubre",    fecha:"20/10", efemeride:"Día del Motociclista Argentino",             categoria:"SECT", vehiculo:"MOTOS", idea:"¡Feliz Día del Motociclista! 🏍️🇦🇷 Celebramos a toda la comunidad moto" },

  // ── NOVIEMBRE ──
  { mes:"Noviembre",  fecha:"23/11", efemeride:"Día de la Soberanía Nacional (trasl. 20/11)",categoria:"NAC",  vehiculo:"AMBOS", idea:"Soberanía y orgullo argentino 🇦🇷 Fin de semana largo" },
  { mes:"Noviembre",  fecha:"28/11", efemeride:"Día del Mecánico",                           categoria:"SECT", vehiculo:"AMBOS", idea:"Gracias a quienes mantienen todo en marcha 🔧 ¡Por nuestros mecánicos!" },
  { mes:"Noviembre",  fecha:"30/11", efemeride:"Black Friday",                               categoria:"MKT",  vehiculo:"AMBOS", idea:"Ofertas de fin de año en autos y motos 🛍️ #BlackFriday2026 #GrupoJack" },

  // ── DICIEMBRE ──
  { mes:"Diciembre",  fecha:"07/12", efemeride:"Puente turístico",                           categoria:"NAC",  vehiculo:"AMBOS", idea:"Fin de semana largo de diciembre 🗺️ ¿Último viaje del año?" },
  { mes:"Diciembre",  fecha:"08/12", efemeride:"Inmaculada Concepción de María",             categoria:"NAC",  vehiculo:"AMBOS", idea:"Feriado nacional 🕊️ ¡Buen descanso a todos!" },
  { mes:"Diciembre",  fecha:"18/12", efemeride:"Día de la Seguridad Vial",                   categoria:"SECT", vehiculo:"AMBOS", idea:"Manejá y rodá con responsabilidad 🚦 Un compromiso de todos" },
  { mes:"Diciembre",  fecha:"24/12", efemeride:"Nochebuena",                                 categoria:"MKT",  vehiculo:"AMBOS", idea:"¡Felices Fiestas! Que la magia de la Navidad te acompañe en cada viaje 🎄" },
  { mes:"Diciembre",  fecha:"25/12", efemeride:"Navidad",                                    categoria:"NAC",  vehiculo:"AMBOS", idea:"¡Feliz Navidad de parte de todo Grupo Jack! 🎁🚗🏍️" },
  { mes:"Diciembre",  fecha:"31/12", efemeride:"Nochevieja",                                 categoria:"MKT",  vehiculo:"AMBOS", idea:"Cerramos 2026 a toda velocidad 🥂🎊 ¡Hasta el año que viene!" },
]
