/**
 * Created by aliyy on 2017/3/8.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employee';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {
  // props.employees => a array of employee objects 从数据库中获取的，从createContainer中获得
  // console.log(props.employees);

  componentWillMount(){
    this.page = 1;
  }

  handleButtonClick(){
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1) );
    this.page += 1;
  }

  render () {
    return (
      <div>
        <div className="employee-list">
          { this.props.employees.map(employee => <EmployeeDetail employee={employee} key={employee._id}/>) }
        </div>
        {/* !!!!!!!! .bind(this) !!!!!!!!*/}
        <button
          onClick={ this.handleButtonClick.bind(this) }
          className="btn btn-primary">
          Load More...
        </button>
      </div>
    )
  }
}

export default createContainer(() => {
//   set up subscription
  Meteor.subscribe('employees', PER_PAGE);

//  return an object. Whatever we return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() }
//  .find是返回了指针，.fetch才会返回数据
}, EmployeeList);