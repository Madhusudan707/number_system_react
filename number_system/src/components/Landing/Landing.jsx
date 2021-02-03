import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import InputBox from "../InputBox/InputBox";
import ContainedButtons from "../ContainedButtons/ContainedButtons";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {
  BinaryToDecimal,
  BinaryToOctal,
  DecimalToBinary_Octal_hexaDecimal,
  hexadecimalToBinary,
} from "../convert.js";

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
  // const [inputData, setInputData] = useState("");
  let input, id, inputBox;

  function clickHandler() {
    inputBox = document.querySelectorAll(".MuiInputBase-input");
    for (let i = 0; i < inputBox.length; i++) {
      let textBoxValue = 0;
      textBoxValue = document.getElementById(inputBox[i].id).value;
      if (i == 0 && textBoxValue) {
        //Binary to All
        let toAll = 1,
          base,
          returnValue = 0;
        while (toAll <= 3) {
          switch (toAll) {
            case 1:
              base = 2;
              returnValue = BinaryToDecimal(textBoxValue, base);

              document.getElementById("decimal").value = returnValue;

              break;
            case 2:
              base = 2;
              returnValue = BinaryToOctal(textBoxValue, base);
              document.getElementById("octal").value = returnValue;

              break;
            case 3:
              base = 2;
              returnValue = BinaryToDecimal(textBoxValue, base);
              base = 16;
              returnValue = DecimalToBinary_Octal_hexaDecimal(
                returnValue,
                base
              );
              document.getElementById("hexadecimal").value = returnValue;

              break;
            default:
          }
          toAll = toAll + 1;
        }
      } else if (i == 1 && textBoxValue) {
        let toAll = 1,
          base,
          returnValue = 0;
        while (toAll <= 3) {
          //Decimal to All
          switch (toAll) {
            case 1:
              base = 2;
              returnValue = DecimalToBinary_Octal_hexaDecimal(
                textBoxValue,
                base
              );
              document.getElementById("binary").value = returnValue;

              break;
            case 2:
              base = 8;
              returnValue = DecimalToBinary_Octal_hexaDecimal(
                textBoxValue,
                base
              );
              document.getElementById("octal").value = returnValue;

              break;
            case 3:
              base = 16;
              returnValue = DecimalToBinary_Octal_hexaDecimal(
                textBoxValue,
                base
              );
              document.getElementById("hexadecimal").value = returnValue;

              break;
            default:
          }
          toAll = toAll + 1;
        }
      } else if (i == 2 && textBoxValue) {
        //Octal to All
        let toAll = 1,
          base,
          returnValue = 0;
        while (toAll <= 3) {
          switch (toAll) {
            case 1:
              base = 8;
              returnValue = BinaryToDecimal(textBoxValue, base);
              base = 2;
              returnValue = DecimalToBinary_Octal_hexaDecimal(
                returnValue,
                base
              );
              document.getElementById("binary").value = returnValue;

              break;
            case 2:
              base = 8;
              returnValue = BinaryToDecimal(textBoxValue, base);
              document.getElementById("decimal").value = returnValue;

              break;
            case 3:
              base = 8;
              returnValue = BinaryToDecimal(textBoxValue, base);
              base = 16;
              returnValue = DecimalToBinary_Octal_hexaDecimal(
                returnValue,
                base
              );
              document.getElementById("hexadecimal").value = returnValue;

              break;
            default:
          }
          toAll = toAll + 1;
        }
      } else if (i == 3 && textBoxValue) {
        //Octal to All
        let toAll = 1,
          base,
          returnValue = 0;
        while (toAll <= 3) {
          switch (toAll) {
            case 1:
              base = 16;
              returnValue = hexadecimalToBinary(textBoxValue, base);

              base = 2;
              returnValue = DecimalToBinary_Octal_hexaDecimal(
                returnValue,
                base
              );
              document.getElementById("binary").value = returnValue;

              break;
            case 2:
              base = 16;
              returnValue = hexadecimalToBinary(textBoxValue, base);
              document.getElementById("decimal").value = returnValue;

              break;
            case 3:
              base = 16;
              returnValue = hexadecimalToBinary(textBoxValue, base);
              base = 8;
              returnValue = DecimalToBinary_Octal_hexaDecimal(
                returnValue,
                base
              );
              document.getElementById("octal").value = returnValue;

              break;
            default:
          }
          toAll = toAll + 1;
        }
      }
    }

    // //setInputData(input)
    // // axios.get(`http://numbersapi.com/${inputData}/math`)
    // axios.get(`http://127.0.0.1:3001/number/${input}`).then((res) => {
    //   const num = res.data;

    //   setInputData(num);
    // });
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
          <br/> <br/>
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
        
          <ContainedButtons name="SUBMIT" Handler={clickHandler} />
          <ContainedButtons name="RESET" Handler={resetHandler} />
        

      
      </Grid>
    </div>
  );
};

export default Landing;
