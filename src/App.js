import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OldSignupForm from './components/SignupForm/SignupForm';

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <Router>
        <Routes>
          <Route path="/signup">
            <OldSignupForm />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
