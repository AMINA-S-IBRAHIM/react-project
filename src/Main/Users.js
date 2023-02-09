import React from 'react';
import { Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Userlist from './Userlist';
import{Link, useNavigate} from 'react-router-dom';


function Users(){
    
    let history = useNavigate();

    const handleEdit=(Id,Name,Age,Gender,Email)=>{
        localStorage.setItem('Name',Name);
        localStorage.setItem('Age',Age);
        localStorage.setItem('Gender',Gender);
        localStorage.setItem('Email',Email);
        localStorage.setItem('Id',Id);
        
    }

    const handleDelete = (Id) =>{
        var index = Userlist.map(function(e){
            return e.Id
        }).indexOf(Id);
        
        Userlist.splice(index,1);

        history('/');
    }

    return(
        
            <div style={{margin:"10rem"}}>
                
                <Link className='AddForm' to="/create">
                    <Button size="lg" >CREATE</Button>
                </Link>
                <br/><br/>

                <Table stripped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>GENDER</th>
                            <th>EMAIL</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Userlist && Userlist.length>0 
                            ?
                            Userlist.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.Age}</td>
                                        <td>{item.Gender}</td>
                                        <td>{item.Email}</td>
                                        <td>
                                          <Link to={'/view'}>
                                            <Button on onClick={() =>alert(item.Id)}>VIEW</Button>
                                            </Link>
                                            &nbsp;
                                            <Link to={'/edit'}>
                                            <Button on onClick={() =>handleEdit(item.Id,item.Name,item.Age,item.Gender,item.Email)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button on onClick={() =>handleDelete(item.Id)}>DELETE</Button>
                                          
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>

            </div>
            
    )
}
export default Users;