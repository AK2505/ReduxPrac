import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./component/CakeContainer";
import HooksCakeComponent from "./component/HooksCakeComponent";
import IceCreamContainer from "./component/IceCreamContainer";
import UserContainer from "./component/UserContainer";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HooksCakeComponent />
        <IceCreamContainer />
        <UserContainer/>
      </div>
    </Provider>
  );
};
export default App;
