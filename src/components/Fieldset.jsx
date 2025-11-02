import "../styles/Fieldset.css";

export default function Fieldset({ legend, children }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
      <button>Submit</button>
      <button>Edit</button>
    </fieldset>
  );
}
