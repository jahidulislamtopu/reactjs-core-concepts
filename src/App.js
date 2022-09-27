import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  { name: 'Dr. Mahfuz', jb: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'agun', jb: 'shopno' },
  { name: 'Shuvro', job: 'pathor' }
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'Manna', 'Salman sha', 'Jashim', 'Riyaz'];

  return (
    <div className="app">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }


      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="sabnur"></Person>
      <Person name={nayoks[2]} nayika="bobita"></Person> */}
      <h5>Hello buddy</h5>
      <Friend movie="Avater" phone="74367856"></Friend>
      <Friend phone="6545"></Friend>

    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Naika: Actor</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>Name:{props.movie}</h3>
      <p>phone:{props.phone}</p>
    </div>
  )
}

export default App;
