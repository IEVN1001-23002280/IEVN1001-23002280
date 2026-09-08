interface IAlumno{
    nombre:string,
    apellido:string,
    edad:number,
    email:string,
    nota?:number //con el signo de interrogacion es que el campo es opcional
}

const alumno:IAlumno={
    nombre:"Mario",
    apellido:"Lopez",
    edad:22,
    email:"lopez@gmail.com"
    
}
console.log(alumno)

let mascotas=['perro','gato','perico']
console.log(mascotas)
mascotas[1]="Nuevo gato"
console.log(mascotas)
mascotas.push('leon')
console.log(mascotas)

let tem:(number|string)[]=[]
tem.push(11)
tem.push('once')
console.log(tem) 
//