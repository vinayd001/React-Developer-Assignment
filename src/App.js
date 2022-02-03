import React from "react";
import BasicTabs from "./components/BasicTabs";
import { Provider } from "react-redux";
import { createStore } from "redux";

import detailsReducer from "./redux/detailsReducer";

const store = createStore(detailsReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Tab Navigation + Redux Store</h1>
        <hr></hr>
        <BasicTabs />
      </div>
    </Provider>
  );
};

export default App;
