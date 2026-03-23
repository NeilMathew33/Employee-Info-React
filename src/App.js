import logo from './logo.svg';
import './App.css';
import EmployeeInformation from './container/EmployeeInformation';
import DeleteEmployee from './container/DeleteEmployee';
import SearchEmployee from './container/SearchEmployee';
import ViewEmployee from './container/ViewEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeInformation />} />
        <Route path="/delete" element={<DeleteEmployee />} />
        <Route path="/search" element={<SearchEmployee />} />
        <Route path="/ViewAll" element={<ViewEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

      export default App;
