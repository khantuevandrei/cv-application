import "../styles/Fieldset.css";

export default function Fieldset({ legend, disabled, children }) {
  return (
    <fieldset disabled={disabled}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
