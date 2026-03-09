// Categorías: NAC = Nacional/Feriado | MKT = Fecha Comercial | SECT = Sector (automotor / moto)

export const DATA_AUTOS = [
  // ── ENERO ──
  { mes:"Enero",      fecha:"01/01", efemeride:"Año Nuevo",                             categoria:"NAC",  idea:"Feliz 2026 🎉 Este año estrenamos juntos. ¿Cuál es tu próximo auto?" },
  { mes:"Enero",      fecha:"06/01", efemeride:"Día de Reyes",                          categoria:"MKT",  idea:"Los Reyes Magos traen el mejor regalo: llaves de un 0km 🎁" },
  { mes:"Enero",      fecha:"12/01", efemeride:"Día Mundial del Auto Eléctrico",        categoria:"SECT", idea:"El futuro ya llegó 🔋⚡ Conocé nuestra línea de autos eléctricos e híbridos" },
  { mes:"Enero",      fecha:"30/01", efemeride:"Día de la Conducción Segura",           categoria:"SECT", idea:"Manejar con cuidado es el mejor equipamiento 🛡️ #ManejoSeguro" },
  // ── FEBRERO ──
  { mes:"Febrero",    fecha:"14/02", efemeride:"San Valentín",                          categoria:"MKT",  idea:"Una prueba de manejo para dos 💘 Vení con quien más querés" },
  { mes:"Febrero",    fecha:"16/02", efemeride:"Lunes de Carnaval",                     categoria:"NAC",  idea:"¡Feliz Carnaval! 🎊 Feriado largo, ¿ya tenés el auto listo para salir?" },
  { mes:"Febrero",    fecha:"17/02", efemeride:"Martes de Carnaval",                    categoria:"NAC",  idea:"Segundo día de Carnaval 🎭 El ritmo no para, como nuestros motores" },
  // ── MARZO ──
  { mes:"Marzo",      fecha:"08/03", efemeride:"Día Internacional de la Mujer",         categoria:"MKT",  idea:"Mujeres al volante, fuerza y libertad 🏁 #MujeresQueManeja" },
  { mes:"Marzo",      fecha:"23/03", efemeride:"Puente turístico",                      categoria:"NAC",  idea:"Fin de semana largo 🗺️ ¿Ya planeaste adónde ir con tu auto?" },
  { mes:"Marzo",      fecha:"24/03", efemeride:"Día Nacional de la Memoria",            categoria:"NAC",  idea:"Un día para recordar y reflexionar 🕊️" },
  { mes:"Marzo",      fecha:"25/03", efemeride:"Día del Auto Clásico",                  categoria:"SECT", idea:"Historia sobre ruedas 🏆 ¿Cuál es tu auto clásico favorito?" },
  // ── ABRIL ──
  { mes:"Abril",      fecha:"02/04", efemeride:"Día de los Caídos en Malvinas",         categoria:"NAC",  idea:"Los recordamos con orgullo y respeto 🇦🇷" },
  { mes:"Abril",      fecha:"03/04", efemeride:"Viernes Santo",                         categoria:"NAC",  idea:"Fin de semana largo de Semana Santa 🕊️ Viajá seguro" },
  { mes:"Abril",      fecha:"06/04", efemeride:"Día del Deporte del Motor",             categoria:"SECT", idea:"La adrenalina de la velocidad 🏎️ ¿Cuál es tu carrera favorita?" },
  { mes:"Abril",      fecha:"22/04", efemeride:"Día de la Tierra",                      categoria:"MKT",  idea:"Autos más eficientes para un planeta más sano 🌱 #SustentabilidadJack" },
  // ── MAYO ──
  { mes:"Mayo",       fecha:"01/05", efemeride:"Día del Trabajador",                    categoria:"NAC",  idea:"A todos los que mueven el país cada día, gracias 🙌" },
  { mes:"Mayo",       fecha:"15/05", efemeride:"Día de la Familia",                     categoria:"MKT",  idea:"Cada familia tiene su auto ideal 👨‍👩‍👧‍👦 Encontrá el tuyo en Grupo Jack" },
  { mes:"Mayo",       fecha:"25/05", efemeride:"Revolución de Mayo",                    categoria:"NAC",  idea:"¡Feliz 25 de Mayo! 🇦🇷 Patria al volante, siempre adelante" },
  // ── JUNIO ──
  { mes:"Junio",      fecha:"15/06", efemeride:"Día del Padre",                         categoria:"MKT",  idea:"El mejor regalo para papá tiene cuatro ruedas 🎁🚗" },
  { mes:"Junio",      fecha:"17/06", efemeride:"Día de Güemes (trasladado del 20/6)",   categoria:"NAC",  idea:"En honor al General Güemes 🇦🇷" },
  { mes:"Junio",      fecha:"20/06", efemeride:"Día de la Bandera — General Belgrano",  categoria:"NAC",  idea:"Feliz Día de la Bandera 🇦🇷 Orgullosos de ser argentinos" },
  { mes:"Junio",      fecha:"21/06", efemeride:"Inicio del Invierno",                   categoria:"SECT", idea:"¿Tu auto está listo para el frío? 🧊 Tips de mantenimiento de invierno" },
  { mes:"Junio",      fecha:"26/06", efemeride:"Hot Sale",                              categoria:"MKT",  idea:"Las mejores ofertas del año en autos 🔥 #HotSale2026 #GrupoJack" },
  // ── JULIO ──
  { mes:"Julio",      fecha:"09/07", efemeride:"Día de la Independencia",               categoria:"NAC",  idea:"¡Feliz 9 de Julio! Libertad sobre cuatro ruedas 🇦🇷" },
  { mes:"Julio",      fecha:"10/07", efemeride:"Puente turístico",                      categoria:"NAC",  idea:"Fin de semana largo de invierno 🗺️ ¿A dónde salís con el auto?" },
  { mes:"Julio",      fecha:"18/07", efemeride:"Vacaciones de Invierno",                categoria:"MKT",  idea:"¿A dónde vas estas vacaciones? El auto perfecto te espera 🗺️" },
  // ── AGOSTO ──
  { mes:"Agosto",     fecha:"01/08", efemeride:"Día del Niño",                          categoria:"MKT",  idea:"Los chicos también sueñan con autos 🚗✨" },
  { mes:"Agosto",     fecha:"17/08", efemeride:"Paso a la Inmortalidad del Gral. San Martín", categoria:"NAC", idea:"En honor al Libertador 🇦🇷 San Martín, siempre presente" },
  // ── SEPTIEMBRE ──
  { mes:"Septiembre", fecha:"21/09", efemeride:"Día de la Primavera / Día del Estudiante", categoria:"MKT", idea:"¡Bienvenida primavera! 🌸 La estación perfecta para estrenar tu nuevo auto" },
  { mes:"Septiembre", fecha:"25/09", efemeride:"Día Mundial del Turismo",               categoria:"MKT",  idea:"Viajar es vivir 🗺️ ¿Con qué auto recorrés Argentina?" },
  // ── OCTUBRE ──
  { mes:"Octubre",    fecha:"12/10", efemeride:"Día del Respeto a la Diversidad Cultural", categoria:"NAC", idea:"Diversidad en cada camino 🌍 Todos los caminos llevan a Grupo Jack" },
  { mes:"Octubre",    fecha:"16/10", efemeride:"Cyber Monday",                          categoria:"MKT",  idea:"Ofertas digitales en autos 0km ⚡💻 #CyberMonday2026" },
  // ── NOVIEMBRE ──
  { mes:"Noviembre",  fecha:"23/11", efemeride:"Día de la Soberanía Nacional (trasl. del 20/11)", categoria:"NAC", idea:"Soberanía y orgullo argentino 🇦🇷 Fin de semana largo" },
  { mes:"Noviembre",  fecha:"30/11", efemeride:"Black Friday",                          categoria:"MKT",  idea:"Ofertas de fin de año en autos 🛍️ #BlackFriday2026 #GrupoJack" },
  // ── DICIEMBRE ──
  { mes:"Diciembre",  fecha:"07/12", efemeride:"Puente turístico",                      categoria:"NAC",  idea:"Fin de semana largo de diciembre 🗺️ ¿Último viaje del año?" },
  { mes:"Diciembre",  fecha:"08/12", efemeride:"Inmaculada Concepción de María",        categoria:"NAC",  idea:"Feriado nacional 🕊️ ¡Buen descanso a todos!" },
  { mes:"Diciembre",  fecha:"18/12", efemeride:"Día de la Seguridad Vial",              categoria:"SECT", idea:"Manejá con responsabilidad 🚦 Un compromiso de todos en la ruta" },
  { mes:"Diciembre",  fecha:"24/12", efemeride:"Nochebuena",                            categoria:"MKT",  idea:"¡Felices Fiestas! Que la magia de la Navidad te acompañe en cada viaje 🎄" },
  { mes:"Diciembre",  fecha:"25/12", efemeride:"Navidad",                               categoria:"NAC",  idea:"¡Feliz Navidad de parte de todo Grupo Jack! 🎁🚗" },
  { mes:"Diciembre",  fecha:"31/12", efemeride:"Nochevieja",                            categoria:"MKT",  idea:"Cerramos 2026 con el tanque lleno 🥂🎊 ¡Hasta el año que viene!" },
]

export const DATA_MOTOS = [
  // ── ENERO ──
  { mes:"Enero",      fecha:"01/01", efemeride:"Año Nuevo",                             categoria:"NAC",  idea:"¡Feliz 2026! 🎉 Este año la ruta nos espera. ¿Cuántos km vas a hacer?" },
  { mes:"Enero",      fecha:"06/01", efemeride:"Día de Reyes",                          categoria:"MKT",  idea:"Los Reyes Magos también traen motos 🏍️🎁 ¿Pediste la tuya?" },
  { mes:"Enero",      fecha:"17/01", efemeride:"Día del Amigo (Cono Sur)",              categoria:"MKT",  idea:"Nada une más que salir en moto con los amigos 🤝🏍️" },
  { mes:"Enero",      fecha:"30/01", efemeride:"Día de la Conducción Segura",           categoria:"SECT", idea:"Casco, guantes, chaqueta: el equipamiento que salva vidas 🛡️ #MotoSegura" },
  // ── FEBRERO ──
  { mes:"Febrero",    fecha:"01/02", efemeride:"Inicio de temporada de motos",          categoria:"SECT", idea:"¡Arrancó la temporada! 🏁 Preparate para rodar todo el año con nosotros" },
  { mes:"Febrero",    fecha:"14/02", efemeride:"San Valentín",                          categoria:"MKT",  idea:"Dos en moto, la escapada perfecta 💘 ¿Ya planearon el próximo viaje?" },
  { mes:"Febrero",    fecha:"16/02", efemeride:"Lunes de Carnaval",                     categoria:"NAC",  idea:"¡Feliz Carnaval! 🎊 Feriado largo perfecto para salir en moto" },
  { mes:"Febrero",    fecha:"17/02", efemeride:"Martes de Carnaval",                    categoria:"NAC",  idea:"Segundo día de Carnaval 🎭 ¿Ya estás rodando?" },
  // ── MARZO ──
  { mes:"Marzo",      fecha:"08/03", efemeride:"Día Internacional de la Mujer",         categoria:"MKT",  idea:"Las motociclistas también hacen historia 🏍️✊ #MujeresMoto" },
  { mes:"Marzo",      fecha:"23/03", efemeride:"Puente turístico",                      categoria:"NAC",  idea:"Fin de semana largo 🗺️ ¡A cargar combustible y salir en moto!" },
  { mes:"Marzo",      fecha:"24/03", efemeride:"Día Nacional de la Memoria",            categoria:"NAC",  idea:"Un día para recordar y reflexionar 🕊️" },
  // ── ABRIL ──
  { mes:"Abril",      fecha:"02/04", efemeride:"Día de los Caídos en Malvinas",         categoria:"NAC",  idea:"Los recordamos con orgullo y respeto 🇦🇷" },
  { mes:"Abril",      fecha:"03/04", efemeride:"Viernes Santo",                         categoria:"NAC",  idea:"Semana Santa 🕊️ Viajá en moto, viajá seguro" },
  { mes:"Abril",      fecha:"06/04", efemeride:"Día del Deporte del Motor",             categoria:"SECT", idea:"Del MotoGP al enduro: velocidad sobre dos ruedas 🏍️" },
  { mes:"Abril",      fecha:"22/04", efemeride:"Día de la Tierra",                      categoria:"MKT",  idea:"Las motos, una opción más eficiente para moverse 🌱 #EcoMoto" },
  // ── MAYO ──
  { mes:"Mayo",       fecha:"01/05", efemeride:"Día del Trabajador",                    categoria:"NAC",  idea:"A los que usan la moto para llegar al trabajo cada día, gracias 🙌" },
  { mes:"Mayo",       fecha:"21/05", efemeride:"Día de la Movilidad Urbana",            categoria:"SECT", idea:"La moto: la solución al tráfico urbano 🏍️🌆" },
  { mes:"Mayo",       fecha:"25/05", efemeride:"Revolución de Mayo",                    categoria:"NAC",  idea:"¡Feliz 25 de Mayo! 🇦🇷 Libres y sobre dos ruedas" },
  // ── JUNIO ──
  { mes:"Junio",      fecha:"15/06", efemeride:"Día del Padre",                         categoria:"MKT",  idea:"¿Tu papá es motoquero? El regalo perfecto tiene dos ruedas 🎁🏍️" },
  { mes:"Junio",      fecha:"17/06", efemeride:"Día de Güemes (trasladado del 20/6)",   categoria:"NAC",  idea:"En honor al General Güemes 🇦🇷" },
  { mes:"Junio",      fecha:"20/06", efemeride:"Día de la Bandera — General Belgrano",  categoria:"NAC",  idea:"Feliz Día de la Bandera 🇦🇷 Rodamos con orgullo argentino" },
  { mes:"Junio",      fecha:"21/06", efemeride:"Inicio del Invierno",                   categoria:"SECT", idea:"Consejos para rodar seguro en invierno 🧊🏍️ Revisá neumáticos y frenos" },
  { mes:"Junio",      fecha:"26/06", efemeride:"Hot Sale",                              categoria:"MKT",  idea:"Las mejores ofertas del año en motos 🔥🏍️ #HotSale2026" },
  // ── JULIO ──
  { mes:"Julio",      fecha:"09/07", efemeride:"Día de la Independencia",               categoria:"NAC",  idea:"Libertad sobre dos ruedas 🇦🇷🏍️ ¡Feliz 9 de Julio!" },
  { mes:"Julio",      fecha:"10/07", efemeride:"Puente turístico",                      categoria:"NAC",  idea:"Fin de semana largo 🗺️ ¡La mejor excusa para salir en moto!" },
  { mes:"Julio",      fecha:"15/07", efemeride:"Día Mundial de la Moto",                categoria:"SECT", idea:"¡Feliz Día de la Moto! 🏍️🔥 ¿Cuántos km llevan este año?" },
  { mes:"Julio",      fecha:"18/07", efemeride:"Vacaciones de Invierno",                categoria:"MKT",  idea:"¿Vacaciones en moto? La aventura más libre que existe 🗺️🏍️" },
  // ── AGOSTO ──
  { mes:"Agosto",     fecha:"01/08", efemeride:"Día del Niño",                          categoria:"MKT",  idea:"Los futuros motociclistas crecen soñando con dos ruedas 🏍️✨" },
  { mes:"Agosto",     fecha:"17/08", efemeride:"Paso a la Inmortalidad del Gral. San Martín", categoria:"NAC", idea:"En honor al Libertador 🇦🇷 Rodamos con su memoria" },
  { mes:"Agosto",     fecha:"22/08", efemeride:"Día Mundial del Motociclismo",          categoria:"SECT", idea:"Hoy celebramos la pasión por los dos ruedas 🏍️🌍 ¡Compartí tu foto!" },
  // ── SEPTIEMBRE ──
  { mes:"Septiembre", fecha:"15/09", efemeride:"Semana de la Seguridad Vial en Moto",   categoria:"SECT", idea:"Esta semana recordamos: el casco no es opcional 🪖 #MotoConsciente" },
  { mes:"Septiembre", fecha:"21/09", efemeride:"Día de la Primavera / Día del Estudiante", categoria:"MKT", idea:"¡Llegó la primavera! 🌸🏍️ La mejor época para rodar" },
  // ── OCTUBRE ──
  { mes:"Octubre",    fecha:"12/10", efemeride:"Día del Respeto a la Diversidad Cultural", categoria:"NAC", idea:"Motociclistas de todas las culturas, un solo camino 🌍🏍️" },
  { mes:"Octubre",    fecha:"16/10", efemeride:"Cyber Monday",                          categoria:"MKT",  idea:"Ofertas en motos y accesorios online ⚡🏍️ #CyberMonday2026" },
  { mes:"Octubre",    fecha:"20/10", efemeride:"Día del Motociclista Argentino",        categoria:"SECT", idea:"¡Feliz Día del Motociclista! 🏍️🇦🇷 Celebramos a toda la comunidad moto" },
  // ── NOVIEMBRE ──
  { mes:"Noviembre",  fecha:"23/11", efemeride:"Día de la Soberanía Nacional (trasl. del 20/11)", categoria:"NAC", idea:"Soberanía y orgullo argentino sobre dos ruedas 🇦🇷🏍️ Fin de semana largo" },
  { mes:"Noviembre",  fecha:"28/11", efemeride:"Día del Mecánico",                      categoria:"SECT", idea:"A los que mantienen nuestras motos en ruta: ¡gracias! 🔧🏍️" },
  { mes:"Noviembre",  fecha:"30/11", efemeride:"Black Friday",                          categoria:"MKT",  idea:"Ofertas de fin de año en motos 🛍️🏍️ #BlackFriday2026" },
  // ── DICIEMBRE ──
  { mes:"Diciembre",  fecha:"07/12", efemeride:"Puente turístico",                      categoria:"NAC",  idea:"Fin de semana largo 🗺️ ¿Última escapada del año en moto?" },
  { mes:"Diciembre",  fecha:"08/12", efemeride:"Inmaculada Concepción de María",        categoria:"NAC",  idea:"Feriado largo 🕊️ ¿Ya armaste la escapada en moto?" },
  { mes:"Diciembre",  fecha:"18/12", efemeride:"Día de la Seguridad Vial",              categoria:"SECT", idea:"Rodar seguro es la mejor forma de llegar siempre 🚦🏍️ #MotoSegura" },
  { mes:"Diciembre",  fecha:"24/12", efemeride:"Nochebuena",                            categoria:"MKT",  idea:"¡Felices Fiestas moteros! Que el camino siempre sea libre 🎄🏍️" },
  { mes:"Diciembre",  fecha:"25/12", efemeride:"Navidad",                               categoria:"NAC",  idea:"¡Feliz Navidad! 🎁🏍️ Los mejores kilómetros están por venir" },
  { mes:"Diciembre",  fecha:"31/12", efemeride:"Nochevieja",                            categoria:"MKT",  idea:"Cerramos 2026 con el motor encendido 🥂🏍️🎊 ¡Hasta el año que viene!" },
]
