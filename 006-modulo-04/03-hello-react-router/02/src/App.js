import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to='/' children='Home' /></li>
        <li><Link to='/sobre' children='Sobre' /></li>
        <li><Link to='/contato' children='Contato' /></li>
        <li><Link to='/blog' children='Blog' /></li>
      </ul>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/(sobre|contato)' component={Page} />
        <Route path='/blog' component={Blog} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

const Error404 = () => (<h1>Página não encontrada</h1>)
const Home = () => (<h1>Home</h1>)
const Page = ({ match }) => (
  <div>
    <h1>{match}</h1>
  </div>
)
const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/post-1' children='Post 1' /></li>
      <li><Link to='/blog/post-2' children='Post 2' /></li>
    </ul>

    <Switch>
      <Route exact path='/blog' component={NoPosts} />
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)
const Post404 = () => (
  <h1>Esse post não existe</h1>
)
const Post = ({ match: { params: { post } }}) => (
  <h2>Post: {post}</h2>
)
const NoPosts = () => (
  <p>Selectione um post</p>
)

export default App;
