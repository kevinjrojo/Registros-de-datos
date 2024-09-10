import "./App.css";
import { Logo } from "./Component/Logo";
import { Input } from "./Component/Input";
export function App() {
  return (
    <div className="qrcode">
      <Logo />
      <Input text={"Ingrese su URL"} mostrarInput />
    </div>
  );
}
