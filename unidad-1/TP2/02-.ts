/*
Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se
le asignan Alumnos (2)
*/
class Alumno {
    constructor(public nombre: string) {}
  
    mostrarInformacion() {
      console.log(`Alumno: ${this.nombre}`);
    }
}
  
class Curso {
    alumnos: Alumno[] = [];
  
    agregarAlumno(alumno: Alumno) {
      this.alumnos.push(alumno);
    }
  
    mostrarInformacion() {
      console.log(`Curso: Álgebra I`);
      this.alumnos.forEach((alumno, index) => {
        console.log(`- Alumno ${index + 1}: ${alumno.nombre}`);
      });
    }
}
class Escuela {
    cursos: Curso[] = [];
  
    agregarCurso(curso: Curso) {
      this.cursos.push(curso);
    }
  
    mostrarInformacion() {
      console.log(`Escuela: IES 9023`);
      this.cursos.forEach((curso, index) => {
        console.log(`- Curso ${index + 1}:`);
        curso.mostrarInformacion();
      });
    }
}
// Crear una instancia de la Escuela
const miEscuela = new Escuela();

// Crear algunos alumnos
const alumno1 = new Alumno("Tatiana Martinez");
const alumno2 = new Alumno("David Fernandez");
const alumno3 = new Alumno("Micaela Gutierrez");
const alumno4 = new Alumno("Samuel Ayala");

// Crear un curso
const algebra1 = new Curso();
algebra1.agregarAlumno(alumno1);
algebra1.agregarAlumno(alumno2);
algebra1.agregarAlumno(alumno3);
algebra1.agregarAlumno(alumno4);

// Agregar el curso a la escuela
miEscuela.agregarCurso(algebra1);

// Mostrar información de la escuela
miEscuela.mostrarInformacion();