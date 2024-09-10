import { useState } from "react";

export const MostrarQr = ({ textButton, mostrarButton }) => {

const [mostrarButton, setMostrarButton] = useState(true)
  
  const buttonClassName = mostrarButton ? "btn1" : "ocultar";

  return <input type="submit" value={textButton} className={buttonClassName} />;
};
