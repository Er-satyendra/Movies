import { RouterProvider } from 'react-router-dom';
import './App.scss';
import Alert from './components/Shared/Alert';
import Loader from './components/Shared/Loader';
import Router from './routes';
import { useAppSelector } from './store/Hooks';
import { selectAlert } from './store/Slices/Alert.slice';

function App() {
  const alertData = useAppSelector(selectAlert)
  return (
    <div className="App">
      <Loader />
      <Alert state={alertData} />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
