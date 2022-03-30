import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({serverData}) => {
//динамически формируем список с помощью "map"
//пишем колбэк ф-ию где 'item'-каждый отдельный элемент который будет последовательно идти в массиве

const elements = serverData.map(item => {
    return ( 
    <EmployeesListItem name = {item.name} salary = {item.salary} increase ={item.increase}/>
    // или: EmployeesListItem name = {...item}
    // object-spread оператор, разворачивает нам объект
    )
})
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;