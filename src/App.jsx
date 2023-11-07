import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const [name, setName] = useLocalStorage("name", "John");
  const [subject, setSubject] = useLocalStorage("subject", "React Hooks");

  return (
    <div className="App">
      <h1>Welcome, {name}!</h1>
      <p>Continue learing {subject}.</p>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <input type="text" onChange={(event) => setSubject(event.target.value)} />
    </div>
  );
};

export default App;
