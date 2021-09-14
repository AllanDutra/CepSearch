import React, {useState} from "react";
import {mask} from 'remask'

// components
import Information from "./components/Information";
import SocialMedia from "./components/SocialMedia";

// images
import fundoAzul from './img/FundoAzul.svg';
import logoAllanProjects from './img/LogoAllanProjects.svg';
import iconEarth from './img/IconEarth.svg';

// material-ui
import {createTheme, IconButton, TextField, ThemeProvider} from '@material-ui/core';

// react-icons
import {BiSearchAlt} from 'react-icons/bi'
import {RiInstagramLine} from 'react-icons/ri';
import {GoMarkGithub} from 'react-icons/go';

// functions
import { getCep } from "./functions/requests";

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

  const [cep, setCep] = useState('');
  function alterCep(e){
    setCep(mask(e.target.value,['99999-999']));
  }

  const initialObjShow = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: ""
  }
  const [objShow, setObjShow] = useState(initialObjShow);

  // PESQUISANDO CEP APÓS USUÁRIO CLICAR NO BOTÃO
  function searchCep(){
    if(cep){
      getCep(cep, initialObjShow, setObjShow);
    }
  }
  
  // PESQUISANDO CEP APÓS USUÁRIO TECLAR ENTER
  function keyPress(e){
    
    if(e.key === "Enter"){
      getCep(cep, initialObjShow, setObjShow);
    }

  }

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

            <div className="cardsPage">
              <TextField
              variant="filled"
              style={{width:'100%', }}
              size="medium"
              label="CEP"
              InputProps={{style:{
                backgroundColor:'white',
                borderRadius:'0.2em'
              }, endAdornment:
              <IconButton onClick={searchCep}>
                  <BiSearchAlt color="#0062D7"/>
                </IconButton>
              }}
              onChange={alterCep}
              onKeyDown={(e)=>keyPress(e)}
              value={cep}
              />

              <Information
              title="localidade"
              value={objShow.localidade ? objShow.localidade + " - " + objShow.uf : <em>Não definida</em>}
              />

              <Information
              title="bairro"
              value={objShow.bairro ? objShow.bairro : <em>Não definido</em>}
              />

              <Information
              title="logradouro"
              value={objShow.logradouro ? objShow.logradouro : <em>Não definido</em>}
              />

              <Information
              title="ddd"
              value={objShow.ddd ? objShow.ddd : <em>Não definido</em>}
              />

              <Information
              title="ibge"
              value={objShow.ibge ? objShow.ibge : <em>Não definido</em>}
              />

              <Information
              title="gia"
              value={objShow.gia ? objShow.gia : <em>Não definido</em>}
              />

              <Information
              title="siafi"
              value={objShow.siafi ? objShow.siafi : <em>Não definido</em>}
              />
            </div>
            
            <div className="footPage">
              <SocialMedia icon={<RiInstagramLine size="1.5em" style={{marginRight:'0.5em'}}/>} text="@allan_dutraa" link="https://www.instagram.com/allan_dutraa/"/>
              <SocialMedia icon={<GoMarkGithub size="1.5em" style={{marginRight:'0.5em'}}/>} text="AllanDutra" link="https://github.com/AllanDutra"/>
            </div>

          </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
