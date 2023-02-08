import React from 'react';
import { Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import{Link, useNavigate} from 'react-router-dom';
import { getFromLocalStorage } from '../getFromLocalStorage';

function Home(){

    
    let history = useNavigate();

    const handleEdit=(Id,Name,Age,Gender,Email)=>{
        localStorage.setinfo('Name',Name);
        localStorage.setinfo('Age',Age);
        localStorage.setinfo('Gender',Gender);
        localStorage.setinfo('Email',Email);
        localStorage.setinfo('Id',Id);
        
    }


    const handleDelete = (Id) =>{
        var index = Users.map(function(e){
            return e.Id
        }).indexOf(Id);
        
        Users.splice(index,1);

        history('/');
    }

    return(
        
            <div style={{margin:"10rem"}}>
                
                <Link className='AddForm' to="/create">
                    <Button size="lg">CREATE</Button>
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
                            Add && Add.length>0 
                            ?
                            inputarr.map((info,ind)=>{
                                return(
                                    <tr key={ind}>
                                        <td>{info.Name}</td>
                                        <td>{info.Age}</td>
                                        <td>{info.Gender}</td>
                                        <td>{info.Email}</td>
                                        <td>
                                          <Link to={'/view'}>
                                            <Button on onClick={() =>alert(info.Id)}>VIEW</Button>
                                            </Link>
                                            &nbsp;
                                            <Link to={'/edit'}>
                                            <Button on onClick={() =>handleEdit(info.Id,info.Name,info.Age,info.Gender,info.Email)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button on onClick={() =>handleDelete(info.Id)}>DELETE</Button>
                                          
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
export default Home;