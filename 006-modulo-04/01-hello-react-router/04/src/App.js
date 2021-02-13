import { BrowserRouter, Link, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to='/' children='Home' /></li>
        <li><Link to='/sobre' children='Sobre' /></li>
        <li><Link to='/contatos' children='Contato' /></li>
        <li><Link to='/blog' children='Blog' /></li>
      </ul>

      <Route path='/' exact component={Home} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/blog' component={Blog} />
    </BrowserRouter>
  );
}

const Home = () => (<h1>Home</h1>)
const Sobre = () => (<h1>Sobre</h1>)
const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/post-1' children='Post 1' /></li>
      <li><Link to='/blog/post-2' children='Post 2' /></li>
    </ul>

    <Route path='/blog/:post' component={Post} />
    <Route exact path='/blog' component={NoPosts} />
  </div>
)
const Post = ({ match: { params: { post } }}) => (
  <h2>Post: {post}</h2>
)
const NoPosts = () => (
  <p>Selectione um post</p>
)

export default App;
