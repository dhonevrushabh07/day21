import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <div className="bg-alert alert-danger">Hello Yogesh</div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [name, setname] = useState("");
  const [prn, setprn] = useState("");
  const [percent, setpercent] = useState("");
  const [address, setaddress] = useState("");

  const nameHandler = (e) => setname(e.target.value);
  const prnHandler = (e) => setprn(e.target.value);
  const percentHandler = (e) => setpercent(e.target.value);
  const addressHandler = (e) => setaddress(e.target.value);
  const [list, setlist] = useState([]);

  const addUser = async () => {
    const user = {
      name: name,
      prn: prn,
      percent: percent,
      address: address,
    };
    const url = "http://localhost:4000/add-user";

    await axios.post(url, user);
    const newlist = [user, ...list];
    setlist(newlist);

    setname("");
    setprn("");
    setaddress("");
    setpercent("");
  };

  return (
    <div>
      <div>Registration Form</div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={nameHandler}
        />
      </div>
      <div>
        <input
          type="text"
          value={prn}
          placeholder="Enter your prn number"
          onChange={prnHandler}
        />
      </div>
      <div>
        <input
          type="text"
          value={percent}
          placeholder="Enter your percent"
          onChange={percentHandler}
        />
      </div>
      <div>
        <input
          type="text"
          value={address}
          placeholder="Enter your address"
          onChange={addressHandler}
        />
      </div>
      <div>
        <input type="button" value="Register" onClick={addUser} />
      </div>
      <div>
        {list.map((item, index) => (
          <div key={index}>
            {item.name} {item.prn}
            {item.percent} {item.address}
          </div>
        ))}
      </div>
    </div>
  );
}
