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
      <Route path="/post/:title">
        <Article />
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
      {
        titles.map(title => (
          <li key={title}><Link to={`/post/${title}`}>{title}</Link></li>
        ))
      }
    </ul>
  );
}

function Article() {
  const { title } = useParams();
  return (
    <h3>{title}</h3>
  );
}

export default App;
