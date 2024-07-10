import { Route, Routes } from 'react-router-dom';

import SignupForm from './components/SignupForm/SignupForm';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Counter from './components/Counter/Counter';
// import OldClock from './components/Clock/Clock';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

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
      <Routes>
        <Route path="*" element={<SignupForm />}></Route>
        {/* <Route path="*" element={<ColorPicker options={colorPickerOptions} />}></Route> */}
        {/* <Route path="*" element={<Counter />}></Route> */}
        {/* <Route path="*" element={<OldClock />}></Route> */}
      </Routes>
    </div>
  );
}
