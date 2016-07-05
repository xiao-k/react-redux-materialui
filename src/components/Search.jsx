import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  registerBtn: {
    isAdd: {
      display: 'inline-block'
    },
    isNotAdd: {
      display: 'none'
    }
  }
}

const Search = ({
  searchWord,
  searchedList,
  isAddMode,
  onChangeSearchWord,
  enterSearchEdit,
  onClickRegisterBtn
}) => (
  <div>
    <div>
      <TextField
        hintText="検索ワード"
        floatingLabelText="Enterで検索"
        value={ searchWord }
        onKeyDown={e => enterSearchEdit(e)}
        onChange={e => onChangeSearchWord(e)}
      />
    </div>
    <div>
      <Table>
        <TableBody
          displayRowCheckbox={false}
        >
          {searchedList.map( searchedData =>
            <TableRow>
              <TableRowColumn>{searchedData._id}</TableRowColumn>
              <TableRowColumn>{searchedData.title}</TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <br />
      <RaisedButton
        label="新規登録"
        secondary={true}
        style={ (isAddMode) ? styles.registerBtn.isAdd : styles.registerBtn.isNotAdd }
        onClick={onClickRegisterBtn}
      />
    </div>
  </div>
)

Search.propTypes = {
  searchWord: PropTypes.string.isRequired,
  searchedList: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  isAddMode: PropTypes.bool.isRequired,
  onChangeSearchWord: PropTypes.func.isRequired,
  enterSearchEdit: PropTypes.func.isRequired,
  onClickRegisterBtn: PropTypes.func.isRequired
}

export default Search;