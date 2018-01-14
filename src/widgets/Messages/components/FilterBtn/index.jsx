import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import FilterBtn from "./component";
import {
  setVisibilityFilter,
  toggleFilterMobile
} from "../../actions/filterActions";

const mapStateToProps = state => ({
  actionMenuOpen: state.filterReducer.actionMenuOpen,
  activatedFilterNumber: state.filterReducer.status !== "ALL" ? 1 : 0,
  dataLoaded: state.messagesReducer.dataLoaded,
  isFilterOpened: state.filterReducer.filterOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setVisibilityFilter, toggleFilterMobile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterBtn);
