// import React, { Fragment } from "react";
// import "./inputbox.css";

// const InputBox = () => {
//   return (
//     <Fragment>
//       <input type="text" />
//     </Fragment>
//   );
// };

import React from "react";
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    width: 330,
  },
  nsBox: {},
}));

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "blue",
      borderWidth: 2,
    },

    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

function InputBox({ placeholder, value, inputHandler, id }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <ValidationTextField
        className={`${classes.margin} ${classes.nsBox}`}
        placeholder={placeholder}
        variant="outlined"
        defaultValue={value}
        id={id}
        onChange={inputHandler}
      />
    </form>
  );
}

export default InputBox;
