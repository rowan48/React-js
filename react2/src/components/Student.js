import students from "./students.json";
import React from 'react';
 import '../App.css';

// import {NavLink} from "react-router-dom";

class Student extends React.Component {
    constructor(props) {
        super(props);

    }
    addStudent=(e)=> {
        this.props.allStudents();
    }
    render() {
        return (
            <div>
                <table className="table table-light">
                    <thead>
                    <tr>
                        <th className="align-center" scope="col">Name</th>
                        <th className="align-center" scope="col">Age</th>
                        <th  scope="col">Operations</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.allStudents.map(student =>

                    <tr>
                            <td className="align-center">{student.name} </td>
                            <td className="align-center">{student.age}</td>
                            <td>
                                <input
                                    className="align-center"
                                    type="button"
                                    value="Show"
                                    className="btn-primary"
                                />
                            </td>
                        </tr>
                    )
                    }

                        </tbody>
                    </table>



            </div>
        );//return


    }//render
}//class

export default Student;
