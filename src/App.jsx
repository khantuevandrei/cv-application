import "./App.css";
import Input from "./components/Input";
import Fieldset from "./components/Fieldset";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(true);

  function handleActive(e) {
    e.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  }

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function handleInputChange(e) {
    const { id, value } = e.target;
    setData((data) => ({ ...data, [id]: value }));
    console.log(data[id]);
  }

  return (
    <form>
      <Fieldset legend={"General"} disabled={isActive}>
        <Input
          onChange={handleInputChange}
          id="firstName"
          labelName="First name: "
          type="text"
          value={data.firstName}
        />
        <Input
          onChange={handleInputChange}
          id="lastName"
          labelName="Last name: "
          type="text"
          value={data.lastName}
        />
        <Input
          onChange={handleInputChange}
          id="email"
          labelName="Email: "
          type="email"
          value={data.email}
        />
        <Input
          onChange={handleInputChange}
          id="phone"
          labelName="Phone: "
          type="tel"
          value={data.phone}
        />
      </Fieldset>
      <button onClick={handleActive} disabled={isActive}>
        Submit
      </button>
      <button onClick={handleActive} disabled={!isActive}>
        Edit
      </button>
    </form>
  );
}
