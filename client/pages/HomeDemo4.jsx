import Header from "layouts/Header";
import HomeDemo4Container from "../containers/HomeDemo4";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

import { authActions } from '../store/authSlice'

const HomeDemo4 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      dispatch(authActions.login(localStorage.getItem('authToken')))
    }
  }, [])
  return (
    <>

      <HomeDemo4Container />
    </>
  );
};

export default HomeDemo4;
