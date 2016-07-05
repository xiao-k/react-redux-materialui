import request from 'axios';

export function changeSearchWord( searchWord ){
  return {
    type: 'CHANGE_SEARCH_WORD',
    searchWord
  };
}

function requestProcess(){
  return { type: 'REQUEST_PROCESS' };
}

export function search(){
  return ( dispatch, getState ) => {
    dispatch( requestProcess() );

    const searchWord = getState().rootReducer.search.searchWord;
    return makeRequest('/find', 'post', { searchWord })
      .then(response => {
        if (response.status === 200) {
          return dispatch({
                    type: 'SUCCESS_SEARCH',
                    searchedList: response.data.sampleList
                  });
        }
        else {
          return dispatch({
                    type: 'FAILED_SEARCH',
                    message: "検索に失敗しました。"
                  });
        }
      })
      .catch(() => {
          return dispatch({
                    type: 'FAILED_SEARCH',
                    message: "検索に失敗しました。"
                  });
      });
  };
}

export function registarSearchWord(){
  return ( dispatch, getState ) => {
    dispatch( requestProcess() );

    const searchWord = getState().rootReducer.search.searchWord;
    return makeRequest('/add', 'post', { title: searchWord })
      .then(response => {
        if (response.status === 200) {
          return dispatch({
                    type: 'SUCCESS_REGISTAR'
                  });
        }
        else {
          return dispatch({
                    type: 'FAILED_REGISTAR',
                    message: "登録に失敗しました。"
                  });
        }
      })
      .catch(() => {
          return dispatch({
                    type: 'FAILED_REGISTAR',
                    message: "登録に失敗しました。"
                  });
      });
  };
}

export function changeAlertMessage( message ){
  return {
    type: 'CHANGE_ALERT_MESSAGE',
    message
  }
}

function makeRequest(url, method, data) {
  return request({
    url,
    method,
    data
  });
}
