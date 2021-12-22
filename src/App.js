import { BrowserRouter , Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Header></Header>
          <Routes>
           <Route path="shop" element={<Shop></Shop>}></Route>
           <Route path="orderreview" element={<OrderReview></OrderReview>}></Route>
           <Route path="*" element={<NotFound></NotFound>}></Route>
           <Route path="inventory" element={<Inventory></Inventory>}></Route>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
