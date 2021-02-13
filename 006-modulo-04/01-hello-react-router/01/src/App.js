import { BrowserRouter, Link, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Link to='/Sobre' children='Sobre' />

      <Route path='/sobre' component={Sobre} />
    </BrowserRouter>
  );
}

const Sobre = () => (<h1>Sobre</h1>)

export default App;
