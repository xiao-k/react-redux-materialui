import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const ResultDialog = ({
  onCloseDialog,
  message
}) => (
  <Dialog
    actions={[
      <RaisedButton
        label="OK"
        primary={true}
        onTouchTap={onCloseDialog}
      />,
    ]}
    modal={false}
    open={ typeof message === "string" && message.length > 0 }
    onRequestClose={onCloseDialog}
  >
    {message}
  </Dialog>
);

ResultDialog.propTypes = {
  onCloseDialog: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default ResultDialog;