import { useState } from 'react';
import './styles/main.sass';
import Form from "./components/Form";

function App() {
  const [data, setData] = useState('Loading');
  async function fetchAPI() {
    let res = await fetch("http://localhost:4000");
    let json = await res.json();
    setData(json.ip);
  }
  fetchAPI();
  return (
    <div className="App">
      <Form></Form>
      Your IP address is {data}
    </div>
  );
}

export default App;
