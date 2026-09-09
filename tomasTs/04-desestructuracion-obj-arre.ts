
interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const Reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:"Mess",
    detalles:{
        autor:'Ed Sheran',
        anio:2015
    }
}

console.log('La volumen actual es ', Reproductor.volumen);
console.log('El segundo actual es ', Reproductor.segundo);
console.log('La cancion actual es ', Reproductor.cancion);
console.log('El autor es',Reproductor.detalles.autor);
console.log('El anio es',Reproductor.detalles.anio);

const {volumen, segundo, cancion,detalles}=Reproductor
const {autor, anio}=detalles
console.log('La volumen actual es ', volumen);
console.log('El segundo actual es ', segundo);
console.log('El autor es',autor);
console.log('El anio es',anio);

const dbz:string[]=['Goku','Vegueta','Tunks','Gohan']
console.log(dbz[1]);

const[p1,,,p2]=dbz
console.log(p2)