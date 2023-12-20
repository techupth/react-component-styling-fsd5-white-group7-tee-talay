import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="Primary" />
        <Button type="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" />
        <Alert type="warning" />
        <Alert type="info" />
        <Alert type="success" />
      </div>
    </div>
  );
}

export default App;
