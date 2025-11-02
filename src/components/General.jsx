import "../styles/Fieldset.css";
import Input from "./Input";
import { useState } from "react";

export default function General() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function inputChange(e) {
    const { id, value } = e.target;
    setData((data) => ({ ...data, [id]: value }));
    console.log(data[id]);
  }

  return (
    <fieldset>
      <Input
        onChange={inputChange}
        id="firstName"
        labelName="First name: "
        type="text"
        value={data.firstName}
      />
      <Input
        onChange={inputChange}
        id="lastName"
        labelName="Last name: "
        type="text"
        value={data.lastName}
      />
      <Input
        onChange={inputChange}
        id="email"
        labelName="Email: "
        type="email"
        value={data.email}
      />
      <Input
        onChange={inputChange}
        id="phone"
        labelName="Phone: "
        type="tel"
        value={data.phone}
      />
      <button>Submit</button>
      <button>Edit</button>
    </fieldset>
  );
}
