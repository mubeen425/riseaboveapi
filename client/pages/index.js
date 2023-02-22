import HomeDemo4 from "./HomeDemo4";
import { Provider } from "react-redux";
import { Modal } from "react-overlays";
import {useSelector} from 'react-redux';

import store from '../store/index';
import Loading from '../components/ui/loading/Loading';

const Home = () => {
  const loading = useSelector(state => state.ui.loading)
  
  return (
    <Provider store={store}>
      {/* Only we need to call the 4th Template */}
      {loading &&
        <Modal
          show={true}
          renderBackdrop={renderBackdrop}
        >
          <Loading />
        </Modal>
      }
      <HomeDemo4 />
      
    </Provider>
  );
};

export default Home;
