import Utl from "__GLOBAL__/utils";
import reducer from "./reducers";
import App from "./components/App";
import { fetchMessages } from "./actions/messagesAction";

const store = Utl.createStore(reducer);

const classToRender = "MessagesListWP";

const getInitialData = () => {
  store.dispatch(fetchMessages());
};

Utl.render(App, classToRender, {
  mockJson: "messagesWP",
  store,
  callback: getInitialData
});
