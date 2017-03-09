/**
 * Created by aliyy on 2017/3/8.
 */
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employee';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
  // props.employees => a array of employee objects 从数据库中获取的，从createContainer中获得
  // console.log(props.employees);
  return (
    <div>
      <div className="employee-list">
        { props.employees.map( employee => <EmployeeDetail key={employee._id}/> ) }
      </div>

    </div>
  )
};

export default createContainer(() => {
//   set up subscription
  Meteor.subscribe('employees');

//  return an object. Whatever we return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() }
//  .find是返回了指针，.fetch才会返回数据
}, EmployeeList);