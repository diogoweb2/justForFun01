import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DetailPanel from "./component";
import { getDataDetail } from "../../actions/messagesAction";

const getSelectedItem = (data, messageId) =>
  data.filter(s => messageId === s.MessageId)[0];
const mapStateToProps = state => {
  const {
    data,
    dataDetailLoaded,
    dataDetail,
    messageId
  } = state.messagesReducer;
  return {
    selectedItem: getSelectedItem(data, messageId),
    messageId,
    dataDetailLoaded,
    dataDetail
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDataDetail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailPanel);
