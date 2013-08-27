/* DEFAULT LANGUAGE 
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.Language == 'undefined') {
	VMM.Language = {
		lang: "es",
		api: {
			wikipedia: "es"
		},
		date: {
			month: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			month_abbr: ["Ene", "Feb", "Mar", "Abril", "Mayo", "Junio", "Julio", "Ago", "Sept", "Oct", "Nov", "Dic"],
			day: ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
			day_abbr: ["Dom","Lun", "Mar", "Mier", "Jue", "Vier", "Sab"]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_short: "h:MM:ss TT",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "mmm d',' yyyy 'at' h:MM TT",
			full_long_small_date: "h:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Cargando Línea del Tiempo... ",
			return_to_title: "Regresar al título",
			expand_timeline: "Expand Timeline",
			contract_timeline: "Contract Timeline",
			wikipedia: "From Wikipedia, the free encyclopedia",
			loading_content: "Cargando contenido",
			loading: "Cargando"
		}
	}
};
