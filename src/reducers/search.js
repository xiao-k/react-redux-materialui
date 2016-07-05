
export default function search(state = {
  searchWord: "",
  isProcessing: false,
  searchedList: [],
  alertMessage: "",
  isAddMode: false
}, action = {}){
  switch( action.type ){
    case 'CHANGE_SEARCH_WORD':
      return Object.assign({}, state, {
        searchWord: action.searchWord,
        isAddMode: false
      });
    case 'REQUEST_PROCESS':
      return Object.assign({}, state, {
        isProcessing: true
      });
    case 'SUCCESS_SEARCH':
      var newIsAddMode = true;
      if( state.searchWord.length <= 0 ){
        newIsAddMode = false;
      }
      else {
        for( var i = 0; i < action.searchedList.length; i++){
          if( state.searchWord.toLowerCase()
                === action.searchedList[i].title.toLowerCase() ){
            newIsAddMode = false;
          }
        }
      }
      return Object.assign({}, state, {
        isProcessing: false,
        searchedList: action.searchedList,
        isAddMode: newIsAddMode
      });
    case 'FAILED_SEARCH':
      return Object.assign({}, state, {
        isProcessing: false,
        alertMessage: action.message
      });
    case 'SUCCESS_REGISTAR':
      return Object.assign({}, state, {
        isProcessing: false,
        alertMessage: "登録しました。",
        searchedList: [],
        searchWord:   "",
        isAddMode: false
      });
    case 'FAILED_REGISTAR':
      return Object.assign({}, state, {
        isProcessing: false,
        alertMessage: action.message
      });
    case 'CHANGE_ALERT_MESSAGE':
      return Object.assign({}, state, {
        alertMessage: action.message
      });
    default:
      return state;
  }
}