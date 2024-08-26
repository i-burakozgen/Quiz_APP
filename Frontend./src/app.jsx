import { useState } from 'preact/hooks'
import './app.css'
import Login from './Components/Login'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Switch } from '@mui/material';


export function App() {
  const [mode, setMode] = useState(false);

  const appTheme = createTheme({
    palette: {
      mode: mode ? 'dark':"light",
    },
  });
  const handleChange = () =>{
    if (mode){
      setMode(false);
    }
    else {
      setMode(true);
    }
  };
  return (
    <>
    <ThemeProvider theme={appTheme}>
      <CssBaseline/>
      <Switch checked ={mode} onChange={handleChange} />
        <Login></Login>

    </ThemeProvider>
    

     
    </>
  )
}
