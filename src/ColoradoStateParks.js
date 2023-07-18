import React from "react";
import howManyParks from "./parks/howManyParks";
import * as MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  console.log(MesaVerde);
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
