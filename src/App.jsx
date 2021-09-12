import React from "react";

// images
import fundoAzul from './img/FundoAzul.svg';
import logoAllanProjects from './img/LogoAllanProjects.svg';
import iconEarth from './img/IconEarth.svg';

// material-ui
import {createTheme, TextField, ThemeProvider} from '@material-ui/core';

const theme = createTheme({
  palette:{
    primary:{
      main: '#00000',
    },
    secondary:{
      main:'#0062D7',
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">

          <img src={fundoAzul} alt="Fundo azul" className="fundoAzul"/>

          <div className="topPage">

            <div className="iconsHeader">
              <img src={logoAllanProjects} alt="Logo" className="logo"/>
              <img src={iconEarth} alt="Planeta" className="earth"/>
            </div>

            <h1>Sistema de pesquisa de CEP</h1>

          </div>

          <div className="contentPage">
            <TextField
            variant="outlined"
            style={{width:'100%'}}
            size="medium"
            label="CEP"
            InputProps={{style:{
              backgroundColor:'white',
            }}}
            />
          </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
