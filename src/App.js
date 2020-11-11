import './App.css';
import './components/Nav/Nav'
import Row from './components/Row/Row'
import Nav from './components/Nav/Nav';
import requests from './requests'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Row title='NETFLIX ORIGINALS' endPoint={requests.fetchNetflix} isLargeRow></Row>
      <Row title='Trending Now' endPoint={requests.fetchTrending}></Row>
      <Row title='Action' endPoint={requests.fetchAction}></Row>
      <Row title='Top Rated' endPoint={requests.fetchTopRated}></Row>
    </div>
  );
}

export default App;
