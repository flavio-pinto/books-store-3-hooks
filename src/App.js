import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge.jsx';
import BookList from './components/BookList.jsx';

function App() {
  return (
    <div className="App">
      <WarningSign alertColor="danger" alertText="Questo è un alert passato dalla prop!" />
      <MyBadge badgeColor="success" badgeText="Prop badge" />
      <BookList />
    </div>
  );
}

export default App;