/*----------------Inicio del simulador interactivo le pedimos al usuario que ingrese los productos que va a comprar----*/

let productos = parseInt(prompt("Ingrese el numero de productos a comprar "));
alert(`Usted va a comprar ${productos} productos `);
/* Declaramos dos arrays vaciuos en el primero le pedimos al usuario que ingrese las marcas seleccionadas en la compra 
y se las mostramos   */

const arrayProductos = [];
const arrayPrecios = [];

for (let i = 0; i <= productos - 1; i++) {
  arrayProductos.push(
    prompt(
      "Ingrese las marcas de las zapatillas a comprar Adidas , Nike , Puma "
    )
  );
}
alert(`usted selecciono estas marcas ${arrayProductos}`);

/* Le pedimos al usuario que ingrese el precio de los productos que selecciono y se los mostramos  */

for (let i = 0; i <= arrayProductos.length - 1; i++) {
  arrayPrecios.push(
    parseInt(prompt("Ingrese los precios de las zapatillas que selecciono:  "))
  );
}
alert(`los precios ingresados son  ${arrayPrecios}`);

/*Declaramos  la variable totalCompra donde acumulamos el total de los productos con el metodo reduce de los array*/

const totalCompra = arrayPrecios.reduce((acc, item) => {
  return (acc = acc + item);
});
alert(`El total de la compra es  : $ ${totalCompra}`);

/*declaramos la varieble kilometros para calcular el costo del flete */

let kilometros = parseFloat(
  prompt(
    "Ingrese la cantidad de kilometros Hasta su domicilio minimo 1 km maximo 20 km : "
  )
);
/* Funcion para calcular el costo el flete deacuerdo a la cantidad de kilometros ingresados por el usuario  */

const calcularFlete = () => {
  if (kilometros <= 0) {
    alert(
      "No ingreso ninguna distancia para el calculo del flete , debe volver a cargar todo el pedido "
    );
  } else if (kilometros <= 15) {
    alert("el costo del flete es de $1500 ");
  } else if (kilometros <= 20) {
    alert("el costo del flete es de $2000");
  }
};
calcularFlete();

alert("Se proceso su pedido , sera enviado dentor de los tres dias habiles ");
