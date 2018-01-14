import { connect } from "react-redux";
import DesktopView from "./component";

const mapStateToProps = state => ({
  selectedItem: state.messagesReducer.selectedItem,
  dataLoaded: state.messagesReducer.dataLoaded
});

export default connect(mapStateToProps)(DesktopView);
