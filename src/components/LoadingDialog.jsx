import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

const componentStyles = {
  dialog: {
    width: '40%',
    maxWidth: 'none'
  }
};

const LoadingDialog = ({
  isLoadingOpen
}) => (
  <Dialog
    actions={[]}
    modal={true}
    open={ isLoadingOpen }
    contentStyle={componentStyles.dialog}
  >
    <div style={{textAlign: "center"}}>
      <CircularProgress/>
    </div>
  </Dialog>
);

LoadingDialog.propTypes = {
  isLoadingOpen: PropTypes.bool.isRequired
};

export default LoadingDialog;