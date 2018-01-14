import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TasksCard from "__SHARED__/TasksCard/TasksCard";
import FilterHelper from "__GLOBAL__/helpers/FilterHelper";
import { fetchMessages, onItemSelected } from "../../actions/messagesAction";

function getVisibleItems(status, sortBy, search, items) {
  let result = items;
  const SearchByJsonFields = [
    "MessageTitle",
    "MessageDate",
    "ActionStatus",
    "Sender"
  ];

  result = FilterHelper.match(result, search, SearchByJsonFields, "MessageId");

  result = result.filter(s => status === "ALL" || status === s.ActionStatus);

  const sortByArr = sortBy.split("|");
  const sortField = sortByArr.length === 2 ? sortByArr[0] : null;
  const sortby = sortByArr.length === 2 ? sortByArr[1] : null;
  let sortByDesc = false;
  if (sortby && sortby.toLowerCase() === "desc") {
    sortByDesc = true;
  }
  if (sortby) {
    result = FilterHelper.sort(result, sortField, sortByDesc);
  }

  return result;
}

const mapStateToProps = state => {
  const { sort, status, search } = state.filterReducer;
  const { sortBy, data } = state.messagesReducer;
  return {
    data: getVisibleItems(status, sort || sortBy, search, data),
    onItemSelected: state.messagesReducer.onItemSelected,
    messageId: state.messagesReducer.messageId,
    selectedItem: state.messagesReducer.selectedItem
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMessages,
      onItemSelected
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TasksCard);
