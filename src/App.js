import React, { useState } from "react";
import "./Assets/css/roledetail.css";
import "../src/Assets/css/new.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./Admin/Components/NavBar";
import SideBar from "./Admin/Components/SideBar";
import Project from "./Admin/pages/Projects/Project_Data";
import Task from "../src/Admin/pages/Tasks/Task_Data";
import Role from "./Admin/pages/Roles/RoleDetails";
import Department from "./Admin/pages/Department/DepartmentDetails";
import AddRole from "./Admin/pages/Roles/Add_Role";
import AddDepartment from "./Admin/pages/Department/AddDepartment";
import EditRole from "./Admin/pages/Roles/EditRole";
import EditDepartment from "./Admin/pages/Department/EditDepartment";
import StaffMenu from "./Admin/pages/StaffSection/StaffMenu";
import AddOneStaff from "./Admin/pages/StaffSection/AddOneStaff";
import PersonalDetail from "./Admin/pages/editstaff/PersonalDetail";
import BankDetails from "../src/Admin/pages/editstaff/EditBankDetail";
import Editattendance from "../src/Admin/pages/editstaff/EditAttendanceDetail";
import EmployementDetail from "./Admin/pages/editstaff/EmployementDetail";
import UserPermission from "./Admin/pages/editstaff/UserPermission";
import EditLeavePolicies from "./Admin/pages/editstaff/EditLeavePolicies";
import CustomDetail from "./Admin/pages/editstaff/CustomDetail";
import BackgroundVerification from "./Admin/pages/editstaff/BackgroundVerification";
import VerifyAadhaar from "./Admin/pages/editstaff/VerifyAadhaar";
import UpperHeader from "./Admin/pages/editstaff/UpperHeader";
import SidebarEditStaff from "../src/Admin/pages/editstaff/SidebarEditStaff";
import Project_overView from "../src/Admin/pages/Projects/Project_overview";
import Salary_Details from "../src/Admin/pages/StaffSection/Salary_Details";
import MultiStepForm from "../src/Admin/pages/authentication/steps/steps/multistepform";
import Attendence_summary from "./Admin/Components/Attendance/Attendence_summary";
import Worktime from "./Admin/Components/Attendance/Worktime";
import Reviewfine from "./Admin/Components/Attendance/Reviewfine";
import Overtime from "./Admin/Components/Attendance/Overtime";
import Project_Summary from "./Admin/pages/Projects/Project_Summary";
import ProjectsOverview from "../src/Admin/pages/Projects/Project_overview";
import Taskview from "./Admin/pages/Tasks/Taskview";
import Task_Data from "./Admin/pages/Tasks/Task_Data";
import Clients from "./Admin/pages/Clients/Clients";
import NewTicket from "../src/Admin/pages/Projects/NewTicketForm";

const App = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);

  const handleToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };
  function AuthLayout() {
    return (
      <>
        <Outlet />
          
      </>
    );
  }

  //  function to create layout of the page
  function AdminLayout() {
    return (
      <>
        <div className="flex">
          <div className="">
            {toggleSideBar && <SideBar toggleSideBar={toggleSideBar} />}
          </div>

          {/* container for navbar and outlet */}
          <div className={`flex flex-col flex-grow overflow-hidden`}>
            <NavBar
              handleToggleSideBar={handleToggleSideBar}
              toggleSideBar={toggleSideBar}
            />
            <main className={`flex-1 overflow-x-hidden overflow-y-auto  `}>
              <div className=" mx-auto px-4 pl-3 pr-3 py-8 lg:px-4 ">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
  function Editstaff() {
    return (
      <>
        <div className="">
          <UpperHeader />
          <div className="flex">
            <SidebarEditStaff />
            <Outlet />
          </div>
        </div>
      
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<AdminLayout />}>
          <Route index element={<StaffMenu />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/task" element={<Task />} />
          <Route path="/addrole" element={<AddRole />} />
          <Route path="/role" element={<Role />} />
          <Route path="/editrole" element={<EditRole />} />
          <Route path="/editdepartment" element={<EditDepartment />} />
          {/* <Route path="/staff-menu" element={<StaffMenu />} /> */}
          <Route path="/add-one-staff" element={<AddOneStaff />} />
          <Route path="/department" element={<Department />} />
          <Route path="/salary_Details" element={<Salary_Details />} />
          <Route path="/task" element={<Task />} />
          <Route path="/ovetime" element={<Overtime />} />
          <Route path="/reviewfine" element={<Reviewfine />} />
          <Route path="/worktime" element={<Worktime />} />
          <Route path="/attendence_summary" element={<Attendence_summary />} />
          <Route path="/taskdata" element={<Task />} />
          <Route path="/project_summary" element={<Project_Summary />} />
          <Route path="/overtime" element={<Overtime />} />
          <Route path="/taskview" element={<Taskview />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/taskdata" element={<Task_Data />} />
        </Route>

        <Route element={<Editstaff />}>
          <Route path="/personal-detail" element={<PersonalDetail />} />
          <Route path="/bank-detail" element={<BankDetails />} />
          <Route path="/attendance-detail" element={<Editattendance />} />
          <Route path="/employee-detail" element={<EmployementDetail />} />
          <Route path="/user-permission" element={<UserPermission />} />
          <Route path="/leavepolicy-detail" element={<EditLeavePolicies />} />
          <Route path="/custom-detail" element={<CustomDetail />} />
          <Route
            path="/background-verification"
            element={<BackgroundVerification />}
          />
          <Route path="/verify-aadhar" element={<VerifyAadhaar />} />
                
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/authentication" element={<MultiStepForm />} />
                  
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
