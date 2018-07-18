import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDataRequest } from "./actions";

class Info extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return <span>info...</span>;
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadDataRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
