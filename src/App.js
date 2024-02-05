
import './App.css';
import Lista from './components/lista';
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Title } from './components/titulo';
import Encabezado from './components/encabezado';
import About from './components/about';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Encabezado></Encabezado>
     
      <About></About>
      <Title>Tienda de Ropa</Title>
      <Lista></Lista>
    </div>
    </QueryClientProvider>
  );
}

export default App;
