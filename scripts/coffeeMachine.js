class CoffeeMachine {
    constructor() {
      this.vasoPequeno = {
        onzas: 3,
        cafe: true,
      };
      this.vasoMediano = {
        onzas: 5,
        cafe: true,
      };
      this.vasoGrande = {
        onzas: 7,
        cafe: true,
      };
      this.azucar = 0;
      this.cafe = [this.vasoPequeno, this.vasoMediano, this.vasoGrande];
    }
  
    elegirVaso(tamano) {
      switch (tamano) {
        case "Pequeno":
          return "Vaso pequeño -> " + this.vasoPequeno.onzas + " Oz de café.";
        case "Mediano":
          return "Vaso mediano -> " + this.vasoMediano.onzas + " Oz de café.";
        case "Grande":
          return "Vaso grande -> " + this.vasoGrande.onzas + " Oz de café.";
        default:
          return "Error: Tamaño de vaso no válido";
      }
    }
  
    elegirAzucar(cantidad) {
      this.azucar = cantidad;
    }
  
    servirCafe() {
      if (this.cafe.length === 0) {
        return "Error: No hay café disponible";
      }
      const vaso = this.cafe.shift();
      if (!vaso.cafe) {
        return "Error: No hay café disponible";
      }
      vaso.cafe = false;
      const mensaje =
        "Sirviendo " +
        vaso.onzas +
        " oz de café con " +
        this.azucar +
        " cucharada(s) de azúcar.";
      return mensaje;

      
    }
  }

  
  
  const maquinaCafe = new CoffeeMachine();
  console.log(maquinaCafe.elegirVaso("Pequeno"));
  console.log(maquinaCafe.elegirAzucar(2));
  console.log(maquinaCafe.servirCafe());
  
  const tamanioVaso = document.getElementById("tamanioVaso");
  const cantidadAzucar = document.querySelector('input[name="cantidadAzucar"]:checked');
  const recogerVasoBtn = document.getElementById("recogerVaso");
  
  recogerVasoBtn.addEventListener("click", function() {
    let seleccionTamanioVaso = tamanioVaso.value;
    let seleccionCantidadAzucar = cantidadAzucar.value;
    
    if (seleccionTamanioVaso === "pequeno" || seleccionTamanioVaso === "mediano" || seleccionTamanioVaso === "grande") {
      console.log("Ha seleccionado un vaso de tamaño: " + seleccionTamanioVaso);
    } else {
      console.log("Por favor seleccione un tamaño de vaso válido.");
    }
    
    console.log("Ha seleccionado " + seleccionCantidadAzucar + " cucharadas de azúcar.");
    
    const confirmacion = confirm(maquinaCafe.elegirVaso(seleccionTamanioVaso) + "\n¿Desea agregar " + seleccionCantidadAzucar + " cucharadas de azúcar?");
  
    if (confirmacion === true) {
        maquinaCafe.elegirAzucar(parseInt(seleccionCantidadAzucar));
        console.log(maquinaCafe.servirCafe());
      } else {
        console.log(maquinaCafe.servirCafe());
      }
      
      console.log("Vaso recogido.");
    });
  