// import React,{Fragment} from 'react'
// import  './navbar.css'
// import Heading from '../Heading/Heading'



// const Navbar = () =>{
//     return (
//         <Fragment>
          
//             <nav>
//             <ul>
//                 <li><a href=''>Home</a></li>
//                 <li><a href=''>Number Fact</a></li>
//                 <li><a href=''>Contact</a></li>
//             </ul>
//         </nav>
//         <Heading/>
//        </Fragment>
//     )
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Heading from '../Heading/Heading'
import  './navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

 function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Heading/>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>NumberFact</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Navbar