import React from "react";
import { connect } from "react-redux";
import { changeStyle } from "../actions";
import ChangeInput from "../components/particle/ChangeInput";

const ChangeBlock = ({
    toggle,
  changeStyle,
  titleField
}) => (
    <ChangeInput
        autoFocus
        onItemUpdate={toggle => {
            console.log('updateeeeee');
            changeStyle(toggle);
        }}
    />
);

const mapDispatchToProps = dispatch => ({
    changeStyle: toggle => dispatch(changeStyle(toggle))
});

const ChangeStyle = connect(
  null,
  mapDispatchToProps
)(ChangeBlock);

export default ChangeStyle;
