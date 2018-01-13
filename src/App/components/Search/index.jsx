import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Search from "./component";
import { setSearch } from "../../actions/filterActions";

const mapStateToProps = state => ({
  search: state.filterReducer.search,
  disabled: !state.messagesReducer.dataLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSearch }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
