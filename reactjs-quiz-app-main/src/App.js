import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path='/' element={<Settings></Settings>}>
            </Route>
            <Route path='/questions' element={<Questions></Questions>}>
            </Route>
            <Route path='/score' element={<FinalScreen></FinalScreen>}>
            </Route>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
