
import { connect } from "react-redux";
import MessagesWrap from "./component";



const mapStateToProps = (state) => ({
        dataLoaded: state.messagesReducer.dataLoaded
	});

 

export default connect(mapStateToProps)(MessagesWrap);
