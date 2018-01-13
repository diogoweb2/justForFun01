import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Sort from "./component";
import { setSort } from "../../actions/filterActions";

// onSort: PropTypes.func.isRequired,
// sort: PropTypes.object.isRequired

const getSelectedVal = (sortByDesc, sortBy) => {
  if (sortByDesc) {
    return `${sortBy}|desc`;
  }
  return `${sortBy}|asc`;
};
const mapStateToProps = state => ({
  sortBy: state.filterReducer.sort
    ? state.filterReducer.sort
    : getSelectedVal(
        state.messagesReducer.sortByDesc,
        state.messagesReducer.sortBy
      )
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSort }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
