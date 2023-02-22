import HomeDemo4 from "./HomeDemo4";
import { Provider } from "react-redux";
import store from '../store/index';

const Home = () => {
  return (
    <Provider store={store}>
      {/* Only we need to call the 4th Template */}
      <HomeDemo4 />
      
    </Provider>
  );
};

export default Home;
