import TestState from "./State/Test/TestState";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectState";
import UseState from "./State/UseState/UseState";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopNavaigation from "./Component/TopNavigation/TopNavaigation";
import "./app.css";
import Footer from "./utils/Footer/Footer";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  //   {
  // // extra-small
  // xs: 0,
  // // small
  // sm: 600,
  // // medium
  // md: 900,
  // // large
  // lg: 1200,
  // // extra-large
  // xl: 1536,
  // }
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <UseState>
          <TestState>
            <UseEffectState>
              <TopNavaigation />
              <Route />
              <Footer />
            </UseEffectState>
          </TestState>
        </UseState>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
