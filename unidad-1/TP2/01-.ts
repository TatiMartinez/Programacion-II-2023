/* Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
    • Crear 5 autos en un array
    • Iterar el array y mostrar los autos por pantalla
    • Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms */

    class Auto {
        marca: string;
        modelo: string;
        potencia: number;
        maxVelocidad: number;
    
        constructor(marca: string, modelo: string,potencia: number,maxVelocidad: number) {
          this.marca = marca;
          this.modelo = modelo;
          this.potencia = potencia;
          this.maxVelocidad = maxVelocidad;  
        };
    
        calcularTiempo(distancia: number): number {
            const tiempo = distancia / this.maxVelocidad;
            return tiempo;
        };
    }
    
    const autos: Auto[] = [
        new Auto("Toyota", "Corolla", 150, 200),
        new Auto("Ford", "Mustang", 300, 250),
        new Auto ("Chevrolet", "Camaro", 250, 220),
        new Auto("Honda", "Civic", 120, 180),
        new Auto("Renault", "Clio", 110, 170)
    ];
    
    for (const auto of autos){
        console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Potencia: ${auto.potencia}, Velocidad Máxima: ${auto.maxVelocidad}`);
    }
    
    const distancia = 100;
    
    for(const auto of autos){
        const tiempo = auto.calcularTiempo(distancia);
        console.log(`El auto ${auto.marca} ${auto.modelo} tarda ${tiempo.toFixed(2)} horas en recorrer ${distancia} Km.`)
    }