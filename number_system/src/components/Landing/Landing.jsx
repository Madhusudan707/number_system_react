import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import InputBox from "../InputBox/InputBox";
import ContainedButtons from "../ContainedButtons/ContainedButtons";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "./landing.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Landing = () => {
  const classes = useStyles();
  const [inputData, setInputData] = useState("");
  let input, id, inputBox;

  function clickHandler() {
   
    inputBox = document.querySelectorAll(".MuiInputBase-input");
    for (let i = 0; i < inputBox.length; i++) {
      let textBoxValue = 0;
      textBoxValue = document.getElementById(inputBox[i].id).value;
      if (i == 0 && textBoxValue) {
        //Binary to All
          axios.get(`http://127.0.0.1:3001/B2ALL/${textBoxValue}`).then((res) => {
          document.getElementById("decimal").value = res.data.resultB2D;
          document.getElementById("octal").value = res.data.resultB2O;
          document.getElementById("hexadecimal").value = res.data.resultB2HD;
        });
      } else if (i == 1 && textBoxValue) {
       //Decimal to All
       axios.get(`http://127.0.0.1:3001/D2ALL/${textBoxValue}`).then((res) => {
        document.getElementById("binary").value = res.data.resultD2B;
        document.getElementById("octal").value = res.data.resultD2O;
        document.getElementById("hexadecimal").value = res.data.resultD2HD;
      });
      } else if (i == 2 && textBoxValue) {
        //Octal to All
        axios.get(`http://127.0.0.1:3001/O2ALL/${textBoxValue}`).then((res) => {
        document.getElementById("binary").value = res.data.resultO2B;
        document.getElementById("decimal").value = res.data.resultO2D;
        document.getElementById("hexadecimal").value = res.data.resultO2HD;
      });
       
      } else if (i == 3 && textBoxValue) {
        //HexaDecimal to All
        axios.get(`http://127.0.0.1:3001/HD2ALL/${textBoxValue}`).then((res) => {
        document.getElementById("binary").value = res.data.resultHD2B;
        document.getElementById("decimal").value = res.data.resultHD2D;
        document.getElementById("octal").value = res.data.resultHD2O;
      });
       
      }
   }
   
  }
  function resetHandler(e) {
    document.getElementById("binary").value = "";
    document.getElementById("decimal").value = "";
    document.getElementById("octal").value = "";
    document.getElementById("hexadecimal").value = "";
  }

  function inputHandler(event) {
    input = event.target.value;
    id = event.target.id;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <br /> <br />
          <div className="InputBoxParent">
            <InputBox
              value=""
              id="binary"
              className="nsBox"
              placeholder="Enter Binary"
              inputHandler={inputHandler}
            />
            <InputBox
              value=""
              id="decimal"
              className="nsBox"
              placeholder="Enter Decimal"
              inputHandler={inputHandler}
            />
            <InputBox
              value=""
              id="octal"
              className="nsBox"
              placeholder="Enter Octal"
              inputHandler={inputHandler}
            />
            <InputBox
              value=""
              id="hexadecimal"
              className="nsBox"
              placeholder="Enter Hexa Decimal"
              inputHandler={inputHandler}
            />
          </div>
        </Grid>
      <p>{inputData}</p>
        <ContainedButtons name="SUBMIT" Handler={clickHandler} />
        <ContainedButtons name="RESET" Handler={resetHandler} />
      </Grid>
    </div>
  );
};

export default Landing;
