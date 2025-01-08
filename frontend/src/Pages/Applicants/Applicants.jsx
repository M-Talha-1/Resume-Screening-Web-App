import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import './Applicants.css'

const Applicants = () => {
    const location = useLocation();
    const isApplicants = location.pathname === '/applicants';
  return (
    <div className='applicant'>

{isApplicants && <Sidebar className="sidebar" />}

    </div>
  )
}

export default Applicants