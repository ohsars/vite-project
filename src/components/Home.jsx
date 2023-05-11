import Employees from "./Employees";
import '../index.css';
import {Link, useNavigate} from 'react-router-dom'

function Home() {

  let history = useNavigate();

  const handleEdit = (id, name, age, address) => {
    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('Address',address)
    localStorage.setItem('id',id)
  }

  const handleDelete = (id) => {
    var index = Employees.map((e) => {
      return e.id
    }).indexOf(id)

    Employees.splice(index,1);

    history('/');


  }

  return (
    <>
      <div className="grid justify-center text-left m-auto">
        <table className="bg-gray-100">
          <thead className="bg-gray-50 text-sm border-b-2 border-gray-200 rounded">
            <tr>
              <th className="p-2 text-md tracking-wide">Name</th>
              <th className="p-2 text-md tracking-wide">Age</th>
              <th className="p-2 text-md tracking-wide">Address</th>
              <th className="p-2 text-md tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0 ?
                Employees.map((item) => {
                  return (
                    <>
                      <tr className="text-gray-700">
                        <td className="p-2 text-sm tracking-wide">
                          {item.Name}
                        </td>
                        <td className="p-2 text-sm tracking-wide">
                          {item.Age}
                        </td>
                        <td className="p-2 text-sm tracking-wide">
                          {item.Address}
                        </td>
                        <td className="p-2 tracking-wide">
                          <Link to={'/edit'}>
                          <button 
                          onClick={() => handleEdit(item.id, item.Name, item.Age, item.Address)}
                          className="bg-blue-500 text-white text-sm rounded p-1"
                          >EDIT</button>
                          </Link>
                          &nbsp;
                          <button 
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 text-white text-sm rounded p-1"
                          >DELETE</button>
                        </td>
                      </tr>
                    </>
                  )
                })
                :
                <p className="text-red-400 text-center text-sm text">"No data available"</p>
            }
          </tbody>
        </table>
        <br />
        <Link 
        to='/create'>
          <button className="bg-green-500 text-white text-sm p-1 w-full mx-auto">Create</button>
        </Link>
      </div>

    </>
  )
}

export default Home