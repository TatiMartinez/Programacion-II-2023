class CuentaBancaria1 {
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
  
    obtenerFondosDisponibles(): number {
      return this.fondos;
    }
  
    private dispararAlarma(mensaje: string): void {
      console.log("¡ALARMA!", mensaje);
    }
}

const cuenta1 = new CuentaBancaria1();
cuenta1.asignarFondos(100000);
console.log("Fondos disponibles:", cuenta1.obtenerFondosDisponibles());

cuenta1.sacarFondos(50000);
console.log("Fondos disponibles:", cuenta1.obtenerFondosDisponibles());
  
cuenta1.sacarFondos(150000);
cuenta1.sacarFondos(200000);