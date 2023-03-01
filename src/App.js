import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RouterPage from './config/router_config/RouterPage';
import { get_menu_items_action } from './redux/actions/menu_item_actions';



function App() {

  const { data, status, error } = useSelector(state => state.menu_items)
  console.log({ data, status, error });


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_menu_items_action())
  }, [])

  return (
    <RouterPage />

  );
}

export default App;
