import { Provider } from 'react-redux';
import store from './store';
import CounterItem from './components/CounterItem';
import './App.css'
import Item from './components/ItemList';
import FetchApi from './components/FetchApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
      <Provider store={store}>
          <CounterItem/>
          <FetchApi/>
      </Provider>

 

  )
}

export default App
