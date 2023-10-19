import './App.css'
import { Outlet } from 'react-router';
import Nav from './nav';

function App() {
  return (
    <div>
      <Nav /> 

      <Outlet />

<footer >&copy; 2023 Morgan Deason</footer>
    </div>
  );
}

export default App;
