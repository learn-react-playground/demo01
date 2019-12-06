import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
    </header>
  );
}

function Main() {
  return (
    <Switch>
      <Route path="/" exact>
        <ArticleList />
      </Route>
      <Route path="/post/标题1">
        <Article1 />
      </Route>
      <Route path="/post/标题2">
        <Article2 />
      </Route>
    </Switch>
  );
}

function Footer() {
  return (
    <footer>
      footer
    </footer>
  );
}

function ArticleList() {
  const titles = ['title1', 'title2'];
  return (
    <ul>
      <li><Link to={`/post/标题1`}>第一篇文章的标题</Link></li>
      <li><Link to={`/post/标题2`}>第二篇文章的标题</Link></li>
    </ul>
  );
}

function Article1() {
  return (
    <h3>第一篇文章</h3>
  );
}

function Article2() {
  return (
    <h3>第二篇文章</h3>
  );
}

export default App;
