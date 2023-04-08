// Definimos la clase CoffeeMachine
class CoffeeMachine {
  constructor() {
    this.coffee = 10; // Inicializamos la cantidad de café
    this.sugar = 10; // Inicializamos la cantidad de azúcar
  }

  // Método para seleccionar el tamaño del vaso y servir el café
  selectCupSize(size) {
    let amount;
    switch(size) {
      case "pequeño":
        amount = 3;
        break;
      case "mediano":
        amount = 5;
        break;
      case "grande":
        amount = 7;
        break;
      default:
        throw new Error("Tamaño de vaso no válido");
    }
    if (this.coffee < amount) {
      throw new Error("No queda suficiente café");
    }
    if (this.sugar < 1) {
      throw new Error("No queda suficiente azúcar");
    }
    this.coffee -= amount;
    return `Ha seleccionado un vaso ${size} de ${amount} oz de café`;
  }

  // Método para seleccionar la cantidad de azúcar
  selectSugarAmount(amount) {
    if (this.sugar < amount) {
      throw new Error("No queda suficiente azúcar");
    }
    this.sugar -= amount;
    return `Ha seleccionado ${amount} cucharadas de azúcar`;
  }

  // Método para recoger el vaso de café
  collectCup() {
    return "Vaso recogido";
  }
}

// Creamos una instancia de la clase CoffeeMachine
const coffeeMachine = new CoffeeMachine();

// Ejemplo de uso
try {
  console.log(coffeeMachine.selectCupSize("pequeño")); // "Ha seleccionado un vaso pequeño de 3 oz de café"
  console.log(coffeeMachine.selectSugarAmount(2)); // "Ha seleccionado 2 cucharadas de azúcar"
  console.log(coffeeMachine.collectCup()); // "Vaso recogido"
} catch(error) {
  console.error(error.message);
}
