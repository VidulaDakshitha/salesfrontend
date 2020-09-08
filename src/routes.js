import React from 'react';


// const Staff=React.lazy(()=>import('./views/Theme/Staff')); //Added staff page
// const Calendar=React.lazy(()=>import('./views/Theme/Calendar'));//Added calendar
// const Client=React.lazy(()=>import('./views/Theme/Client'));//Added client
// const Services=React.lazy(()=>import('./views/Theme/Services'));//Added Services

const Dashboard = React.lazy(() => import('./views/SalesManagement'));
const Home=React.lazy(()=>import('./views/Home')); //Home view Added

// const Users = React.lazy(() => import('./views/Users/Users'));
// const User = React.lazy(() => import('./views/Users/User'));

const Sales=React.lazy(() => import('./views/SalesManagement/Sales/Sales'));
const Payment=React.lazy(() => import('./views/SalesManagement/Payment/Payment'));
const Overhead=React.lazy(() => import('./views/SalesManagement/OverheadExpense/OverheadExpense'));


const Employee=React.lazy(() => import('./views/EmployeeManagement/EmployeeDashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
 
  
  
  { path: '/', exact: true, name: 'Home'},
  localStorage.getItem("user")==="sales"?
  {path:'/salesmanagement',name:'Dashboard',component:Dashboard}:<></>,//added home

  localStorage.getItem("user")==="sales"?
  {path:'/salesmanagemnt/sales',name:'Sales',component:Sales}:<></>,//added home

  localStorage.getItem("user")==="sales"?
  {path:'/salesmanagemnt/payment',name:'Payment',component:Payment}:<></>,//added home

  localStorage.getItem("user")==="sales"?
  {path:'/salesmanagemnt/overheadexpense',name:'Overheadexpense',component:Overhead}:<></>,
  //localStorage.getItem("AccessToken")!==""?{ path: '/dashboard', name: 'Dashboard', component: Dashboard }:window.location.href="/#/login",
  

  
  { path: '/employee', exact: true, name: 'Employee'},
  localStorage.getItem("user")==="employee"?
  {path:'/employee/employeemanagement',name:'EmployeeDashboard',component:Employee}://added home

<></>

  // {path:'/saloon/Staff',name:'Staff',component:Staff}, //Added Staff Route
  // {path:'/saloon/Calendar',name:'Calendar',component:Calendar},//Added Calendar Route
  // {path:'/saloon/Client',name:'Client',component:Client},// added client
  // {path:'/saloon/Services',name:'Services',component:Services},// added services
  // { path: '/saloon', exact: true,  name: 'Users', component: Users },
  // { path: '/saloon/:id', exact: true, name: 'User Details', component: User },
  
];

export default routes;
