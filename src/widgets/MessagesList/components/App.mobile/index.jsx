import { connect } from "react-redux";
import MobileView from "./component";

const mapStateToProps = state => ({
  dataLoaded: state.messagesReducer.dataLoaded,
  total: state.messagesReducer.total
});

export default connect(mapStateToProps)(MobileView);
