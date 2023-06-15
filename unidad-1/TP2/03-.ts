/*Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y
sacar fondos
• Si le asignamos más de 500000 disparamos una alarma
• Si intentamos sacar más de lo que disponemos disparamos otra alarma
• Si intentamos sacar más de 100000 disparamos otra alarma*/

class CuentaBancaria {
    private fondos: number;
  
    constructor() {
      this.fondos = 0;
    }
  
    asignarFondos(monto: number): void {
      if (monto > 500000) {
        this.dispararAlarma("Asignación de fondos excesiva");
      } else {
        this.fondos += monto;
      }
    }
  
    sacarFondos(monto: number): void {
      if (monto > this.fondos) {
        this.dispararAlarma("Intento de retiro superior a los fondos disponibles");
      } else if (monto > 100000) {
        this.dispararAlarma("Retiro superior a 100000");
      } else {
        this.fondos -= monto;
      }
    }
  
    private dispararAlarma(mensaje: string): void {
      console.log("¡ALARMA!", mensaje);
    }
}
  

const cuenta = new CuentaBancaria();
cuenta.asignarFondos(100000);
console.log("Fondos disponibles:", cuenta["fondos"]); // Acceso directo a la propiedad privada para verificar los fondos
  
cuenta.sacarFondos(50000);
console.log("Fondos disponibles:", cuenta["fondos"]);
  
cuenta.sacarFondos(150000);
cuenta.sacarFondos(200000);
  