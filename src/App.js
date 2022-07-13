import { Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CustomBtn from './components/CustomBtn'
import './App.css';


const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main:"#c7d9ed",
    },
  },
  
  typography: {
    fontFamily:[
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme= {theme}>
      <CustomBtn txt="hello world"/>
      </ThemeProvider>
      </div>
  );
}

export default App;
