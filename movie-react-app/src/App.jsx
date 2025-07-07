import "./App.css";
const Card = ({ title }) => {
  return <h2>{title}</h2>;
};
const App = () => {
  return (
    <div>
      <h2>Hello World</h2>
      <Card title="Star Wars" />
      <Card title="Avatar" />
    </div>
  );
};

export default App;
