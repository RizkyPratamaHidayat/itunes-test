import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigations from "./screens/Navigations";
import ModalSearch from "./components/ModalSearch";
import "../src/shared/custom.scss";
const App = () => {
  return (
    <Provider store={store}>
      <ModalSearch />
      <Navigations />
    </Provider>
  );
};
export default App;
