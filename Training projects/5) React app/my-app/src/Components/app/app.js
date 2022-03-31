import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  //имитируем данные пришедшие с сервера
const serverData = [
  {name: "John Smith", salary: 600 , increase: true, id:1},
  {name: "Alfred Kohen", salary: 800 , increase: false, id:2},
  {name: "Joe Black", salary: 300 , increase: false, id:3},
];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList serverData={serverData}/> 
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
