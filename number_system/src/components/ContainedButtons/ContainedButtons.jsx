// import React, { Fragment } from 'react'


// import './button.css'

// const Button = (props) =>{
//     return (
//         <Fragment>
//             <button>{props.name}</button>
//         </Fragment>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(2),
     
    },
  },
}));

function ContainedButtons({name,color,Handler}) {
  const classes = useStyles();
  

    

  return (
    <div className={classes.root}>
    {/* <ButtonGroup   aria-label="outlined primary button group" size='large' >
        <Button color='secondary' variant="outlined" onClick={clickHandler}>SUBMIT</Button>
        <Button color='secondary' variant="outlined" onClick={resetHandler} >RESET</Button>
    </ButtonGroup> */}
   
        <Button color='secondary' variant="outlined" onClick={Handler} style={{display:'inline !important'}}>{name}</Button>
        
        {/* <Button color='secondary' variant="outlined" onClick={resetHandler} >RESET</Button> */}
   
    </div>
  );
}

export default ContainedButtons