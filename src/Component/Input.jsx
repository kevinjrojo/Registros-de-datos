import { MostrarQr } from "./MostrarQr";

export const Input = ({ text, mostrarInput }) => {
  const inputClassName = mostrarInput ? "input" : "ocultar";
  return (
    <form action="" className="formulario">
      <input
        type="text"
        className={inputClassName}
        placeholder={text}
        required
      />
      <MostrarQr textButton={"Obtener QR"} mostrarButton />
    </form>
  );
};
