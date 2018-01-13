import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FilterPanel from "./component";
import {
  setVisibilityFilter,
  setVisibilityFilterWithTimeout,
  setFilterStatus
} from "../../actions/filterActions";

const mapStateToProps = state => ({
  actionMenuOpen: state.filterReducer.actionMenuOpen,
  status: state.filterReducer.status,
  filterOpen: state.filterReducer.filterOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setVisibilityFilter,
      setVisibilityFilterWithTimeout,
      setFilterStatus,
      dispatch
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
