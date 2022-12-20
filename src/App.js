import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Background from './components/Background'
import './App.css';

function App() {
  return (
    <div className='relative w-full'>
      <Background />
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
