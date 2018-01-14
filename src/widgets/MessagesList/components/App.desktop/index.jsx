import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DesktopView from "./component";
import { onItemSelected } from "../../actions/messagesAction";

const mapStateToProps = state => ({
  data: state.messagesReducer.items,
  dataLoaded: state.messagesReducer.dataLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onItemSelected }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DesktopView);
