import icon from "../Images/icon.png"
import dashBoard from '../Images/Dashboard.png'
import packags from '../Images/Package.png'
import setting from '../Images/setting.png'
import subscription from '../Images/subscriptions.png'
import users from '../Images/users.png'
import { Link } from "react-router-dom"


const Sidebar = () => {

  return (
    <div className='bg-[#363740] flex flex-col w-[240px] '>
      <img className='ml-8 mt-8 w-[155px]' src={icon} alt="flowchangerAI" />

      <div className='ml-[2.4rem] flex flex-col gap-8 mt-[3rem] '>
        
          <Link className=' dashboard flex items-center gap-5  cursor-pointer'>
            <img src= {dashBoard} alt="dashboard" />
            <span className='text-[#DDE2FF]'>DashBoard</span>
          </Link>

          <Link className='packages flex items-center gap-5 cursor-pointer'>
            <img src= {packags} alt="packags" />
            <span className='text-[#A4A6B3]'>Package</span>
          </Link>

          <Link className=' setting flex items-center gap-5 cursor-pointer'>
            <img src= {setting} alt="setting" />
            <span  className='text-[#A4A6B3]' >Subscriptions</span>
          </Link>

          <Link className=' subscription flex items-center gap-5 cursor-pointer'>
            <img src= {subscription} alt="subscription" />
            <span className='text-[#A4A6B3]' >Users</span>
          </Link>

          <Link className=' users flex items-center gap-5 cursor-pointer'>
            <img src= {users} alt="users" />
            <span className='text-[#A4A6B3]' >Settings</span>
          </Link>

          <Link  className=' users flex items-center gap-5 cursor-pointer'>
            <img src= {users} alt="users" />
            <span className='text-[#A4A6B3]' >Roles</span>
          </Link>
        </div>
    </div>
  )
}

export default Sidebar
