// Propiedades para el formulario 
// type: defina el tipo del input
// default: el valor por defecto al input
// values: unicamente funcionara si el type es select
//         dentro debe llevar un array con objecto con la propiedad val y text

const Person = {
    "First Name":  { type: "text" },
    "Last Name":  { type: "text"},
    "Date":  { type: "date", default: new Date() },
    "Profiles":  { type: "select", values:[ { val: "1", text: "Administrator"}, { val: "2", text: "Employee"} ] },
    "Password" :   { type: "password" }
}
