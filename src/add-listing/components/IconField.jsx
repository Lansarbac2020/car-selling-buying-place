import React from 'react'
import {FaClipboardList} from 'react-icons/fa'
import {FaTag} from 'react-icons/fa'
import {FaDollarSign} from 'react-icons/fa'
import {FaMoneyBillAlt} from 'react-icons/fa'
import {FaCar} from 'react-icons/fa'
import {FaCheckCircle} from 'react-icons/fa'
import {FaIndustry} from 'react-icons/fa'
import {FaCarSide} from'react-icons/fa'
import{FaCalendarAlt}from 'react-icons/fa'
import{FaRoad}from 'react-icons/fa'
import{FaCogs}from 'react-icons/fa'
import{FaGasPump}from 'react-icons/fa'
import{FaTachometerAlt}from 'react-icons/fa';
import{FaWrench}from 'react-icons/fa'
import{FaCircle}from 'react-icons/fa'
import{FaPalette}from 'react-icons/fa'
import{FaDoorClosed}from 'react-icons/fa'
import{FaIdCard}from 'react-icons/fa'
import{FaTags}from 'react-icons/fa'
import{FaFileAlt}from 'react-icons/fa'






const iconMap={
    FaClipboardList: <FaClipboardList/>,
    FaDollarSign:<FaDollarSign/>,
    FaMoneyBillAlt:<FaMoneyBillAlt/>,
    FaTag:<FaTag/>,
    FaCar:<FaCar/>,
    FaCheckCircle:<FaCheckCircle/>,
    FaIndustry:<FaIndustry/>,
    FaCarSide:<FaCarSide/>,
    FaCalendarAlt:<FaCalendarAlt/>,
    FaRoad:<FaRoad/>,
    FaCogs:<FaCogs/>,
    FaGasPump:<FaGasPump/>,
    FaTachometerAlt:<FaTachometerAlt/>,
    FaWrench:<FaWrench/>,
    FaCircle:<FaCircle/>,
    FaPalette:<FaPalette/>,
    FaDoorClosed:<FaDoorClosed/>,
    FaIdCard:<FaIdCard/>,
    FaTags:<FaTags/>,
    FaFile:<FaFileAlt/>,


}

function IconField({icon}) {
  return (
    <div className='text-primary bg-blue-100 p-1.5 rounded-full'>{iconMap[icon]}</div>
  )
}

export default IconField