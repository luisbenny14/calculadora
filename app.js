var formulario = document.querySelector('form');
var resultado= document.querySelector('h2')
formulario.addEventListener('submit', function(e){
e.preventDefault();

var horasDia = formulario.HrsD.value;
var diasSem = formulario.DiasSem.value;
var sueldo = formulario.Sueldo.value;
var diasLibres = formulario.DiasLibres.value;
var diasInactividad = formulario.DiasInac.value;
var porcientoJuntas = formulario.porcentaje.value;
var gastosMensuales = formulario.GastMensuales.value;
var jubilacion = formulario.Jubilacion.value;

var salarioBrutoanual = sueldo*12;
console.log('salario bruto anual:',salarioBrutoanual)
var horasPosibles = horasDia*diasSem*57;
console.log('Horas posibles:',horasPosibles)
var horasBasico = salarioBrutoanual/horasPosibles;
console.log('Hora basica:',horasBasico)
var horasSintrabajar = diasLibres*horasDia+diasInactividad*horasDia;
console.log('horas sin trabajar:',horasSintrabajar)
var tiempoAdministrativo = (porcientoJuntas/100)*(horasPosibles-horasSintrabajar);
console.log('Tiempo administrativo',tiempoAdministrativo)
var GastosMensuales = gastosMensuales*12;
console.log('Gastos mensuales:',GastosMensuales)
var precioExtradeTrabajo = horasSintrabajar+tiempoAdministrativo+GastosMensuales;
console.log('Precio hora extra:',precioExtradeTrabajo)
var horasEfectivas = (horasPosibles-horasSintrabajar-tiempoAdministrativo)*horasBasico;
console.log('Horas efectivas:', horasEfectivas)
var rentabilidad = precioExtradeTrabajo/horasEfectivas;
console.log('rentabilidad',rentabilidad)
var precioHoradeTrbajo = horasBasico+(horasBasico*rentabilidad)+(horasBasico*jubilacion)
console.log('Precio hora de trabajo:',precioHoradeTrbajo)
resultado.innerHTML=precioHoradeTrbajo;
})