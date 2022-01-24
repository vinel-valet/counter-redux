import { createStore} from "redux";
import ReactDOM from 'react-dom';
import reduser from "./reducer";
import {Provider} from "react-redux";
import App from "./components/app";

const store = createStore(reduser);

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
















