import Navbar from './components/navbar/Navbar'
import ClassSelector from './components/classSelector/ClassSelector'
import FeeStructure from './components/feeStructure/FeeStructure'
import { createContext, useState } from 'react'
import './app.scss'
export const  myContext = createContext('')


const App = () => {
const [selectClass, setSelectClass] = useState("")
  return (
    <myContext.Provider value={{setSelectClass, selectClass}}>
      <div className='app'>
        <div className="mainContainer">
          <div className="top">
            <h1 className='heading'>Fees Management</h1>
            <h3 className='subHeading'>Fees management for students involves the organization and tracking of tuition, fees, and other charges associated with their education.</h3>
            <Navbar />
          </div>
          <div className="bottom">
            <ClassSelector />
            <div className="feeStructureSection">
              <FeeStructure feeHeaderHeading={"Old Students"} />
              <FeeStructure feeHeaderHeading={"New Students"} />
            </div>
          </div>
        </div>
      </div>
    </myContext.Provider>
  )
}

export default App
