let cmbProcedimiento = document.getElementById('procedimiento');
let cmbServicio = document.getElementById('servicio');

cmbServicio.addEventListener("change",seleccion);
let ortodoncia=["Metalica", "Estetica", "Lingual"];
let odontopediatria=["Calces", "Profilaxis", "Extracción dientes de leche"];
let rehabilitacion=["Pulpotomia","Endodoncia","Coronas de metal"];
let cirugia=["Extracción tercer molar","Toruspalatino y mandibular","Ventana quirurgica"];

function seleccion(){
    removerOption(cmbProcedimiento);
    switch(cmbServicio.value){
        case "Ortodoncia":
            llenarCmb(ortodoncia);
            break;
        case "Odontopediatria":
            llenarCmb(odontopediatria);
            break;
        case "Rehabilitacion Oral":
            llenarCmb(rehabilitacion);
            break;
        case "Cirugia":
            llenarCmb(cirugia);
            break;
    }
}

function removerOption(cmbProcedimiento){
    cmbProcedimiento.options.length = 0;
}
function llenarCmb(servicio){
 for(let i=0; i<4 ; i++){
     let option = document.createElement('option');
     option.value = servicio[i];
     option.text = servicio[i];
     cmbProcedimiento.appendChild(option);
 }   
}

function validarDatos(){
		
			var form = document.frmPrueba;
			for (var i=0; i<form.length; i++){
                if(form[i].type ==='text' || form[i].type ==='text'){
					if (form[i].value === null || form[i].value.trim().length === 0){
                        alert (form[i].name+ ' - Debe llenar todos los campos ');
                        form[i].focus();
                        break;
                    }
                }
           }

    
}