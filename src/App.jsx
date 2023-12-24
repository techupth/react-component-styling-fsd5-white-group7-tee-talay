import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button color="primary" text="Primary" />
        <Button color="secondary" text="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert severity="error" message="This is error alert box" />
        <Alert severity="warning" message="This is a warning alert box" />
        <Alert severity="info" message="This is an info alert box" />
        <Alert severity="success" message="This is a success alert box" />
      </div>
    </div>
  );
}

export default App;
