// Component import
// CSS imports
import './index.css';

// Library imports
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App.jsx';
import store from './Redux/Slices/Store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
     <BrowserRouter>
         <App />
         <Toaster></Toaster>
     </BrowserRouter>
     </Provider>
)
