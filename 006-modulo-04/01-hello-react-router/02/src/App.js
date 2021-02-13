import { BrowserRouter, Link, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/contatos' component={Contato} />

      <ul>
        <li><Link to='/' children='Home' /></li>
        <li><Link to='/sobre' children='Sobre' /></li>
        <li><Link to='/contatos' children='Contato' /></li>
      </ul>
      
    </BrowserRouter>
  );
}

const Home = () => (<h1>Home</h1>)
const Sobre = () => (<h1>Sobre</h1>)
const Contato = () => (<h1>Contato</h1>)

export default App;
