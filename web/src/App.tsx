interface ButtonProps {
  title: string;
}

function Button({title}: ButtonProps) {
  return (
    <button>
      {title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="botão 01"/>
      <Button title="botão 02"/>
      <Button title="botão 03"/>
      <Button title="Rocketseat"/>
    </div>
  )
}

export default App
