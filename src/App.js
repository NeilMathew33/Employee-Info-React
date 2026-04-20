import logo from './logo.svg';
import './App.css';
import EmployeeInformation from './container/EmployeeInformation';
import DeleteEmployee from './container/DeleteEmployee';
import SearchEmployee from './container/SearchEmployee';
import ViewEmployee from './container/ViewEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './container/Login';
import SignUp from './container/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Add" element={<EmployeeInformation />} />
        <Route path="/delete" element={<DeleteEmployee />} />
        <Route path="/search" element={<SearchEmployee />} />
        <Route path="/ViewAll" element={<ViewEmployee />} />
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

      export default App;
