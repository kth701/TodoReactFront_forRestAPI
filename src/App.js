import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import root from './router/root';

function App() {
  return (
    // <div>
    //   <h1 className="text-3xl font-bold overline">
    //     Hello world!
    //   </h1>
    // </div>
    
    <RouterProvider router={root} />
  );
}

export default App;
