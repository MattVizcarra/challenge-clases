//! cementerio embrujado
//todo PREGUNTAR AL USUARIO SI TRAJO ANTEOJOS, EN CASO QUE DIGA "SI" MOSTRARLE EL MSJ QUE NO COMPRE, EN CASO QUE DIGA "NO" MOSTRARLE EL MSJ, COMPRA TRANQUILO.

//?let pregunta = prompt("traes anteojos??").toLocaleLowerCase();
//?if(pregunta == "si"){
//?    console.log("corre no te conviene!!!")
//?}else if(pregunta == "si"){
//?    console.log("compra tranqui")
//?}else{
//?    alert('solo se admiten respuestas entre "SI Y NO"')
//?};

//todo PROVINCIAS COPADAS!!!

let provincia = prompt("De que provincia sos?");

//?if(provincias == "tucuman"){
//?    alert('altas empanadas')
//?}else if(provincias == "santiago "){
//?    alert('altas siestas')
//?}else if (provincias == "cordoba"){
//?    alert("aguante el cuarteto y el fernet")
//?}else if(provincias == "jujuy"){
//?    alert("soltame carnaval")
//?}else{
//?    alert("provincia irrelevante")
//?};

switch (provincia){
    case 'tucuman':
        alert('altas empanadas')
        break;
    case 'santiago':
        alert('altas siestas')
        break;
    case 'cordoba':
        alert("aguante el cuarteto y el fernet")
        break;
    case 'jujuy':
        alert("soltame carnaval");
        break;
}


