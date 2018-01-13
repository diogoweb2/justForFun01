import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MobileView from "./component";
import { toggleFilterMobile } from "../../actions/filterActions";

const mapStateToProps = state => ({
  dataLoaded: state.messagesReducer.dataLoaded,
  filterOpen: state.filterReducer.filterOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleFilterMobile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MobileView);
