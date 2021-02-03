// import React from 'react'
// import './heading.css'


// const Heading = ()=>{
//     return(
        
//         <h1 className='heading'>NUMBER SYSTEM CONVERTOR</h1>
//     )
// }



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
  },
}));

 function Heading() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
            NUMBER SYSTEM CONVERTER
        </Typography>
    </div>
  );
}


export default Heading