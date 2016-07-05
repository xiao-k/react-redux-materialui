import { connect } from 'react-redux';
import React, { Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import Search from '../components/Search';
import AlertDialog from '../components/AlertDialog';
import LoadingDialog from '../components/LoadingDialog';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as searchActions from '../actions/search';


class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChangeSearchWord = this.handleChangeSearchWord.bind(this);
    this.handleEnterSearchEdit = this.handleEnterSearchEdit.bind(this);
    this.handleOnClickRegisterBtn = this.handleOnClickRegisterBtn.bind(this);
    this.handleOnClickOkBtn = this.handleOnClickOkBtn.bind(this);
  }

  handleChangeSearchWord(e){
    const { searchActionBind } = this.props;
    searchActionBind.changeSearchWord(e.target.value);
  }

  handleEnterSearchEdit(e){
    const { searchActionBind } = this.props;
    const ENTER_KEY_CODE = 13;
    if(e.keyCode == ENTER_KEY_CODE){
      searchActionBind.search();
    }
  }

  handleOnClickRegisterBtn(){
    const { searchActionBind } = this.props;
    searchActionBind.registarSearchWord();
  }

  handleOnClickOkBtn(){
    const { searchActionBind } = this.props;
    searchActionBind.changeAlertMessage("");
  }

  render() {
    const {
      searchWord, searchedList, isAddMode,
      isProcessing, alertMessage
    } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Search
            searchWord={searchWord}
            searchedList={searchedList}
            isAddMode={isAddMode}
            onChangeSearchWord={this.handleChangeSearchWord}
            enterSearchEdit={this.handleEnterSearchEdit}
            onClickRegisterBtn={this.handleOnClickRegisterBtn}
          />
          <LoadingDialog
            isLoadingOpen={isProcessing}
          />
          <AlertDialog
            message={alertMessage}
            onCloseDialog={this.handleOnClickOkBtn}
          />
        </div>
      </MuiThemeProvider>
    );
  }
};

SearchContainer.propTypes = {
  searchWord: PropTypes.string.isRequired,
  searchedList: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  isAddMode: PropTypes.bool.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  alertMessage: PropTypes.string.isRequired
}

function mapStateToProps( state ){
  const {
    searchWord,
    searchedList,
    isAddMode,
    isProcessing,
    alertMessage
  } = state.rootReducer.search;
  return {
    searchWord,
    searchedList,
    isAddMode,
    isProcessing,
    alertMessage
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    searchActionBind: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);