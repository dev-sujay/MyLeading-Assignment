import { useState, useContext } from "react"
import { myContext } from "../../App"
import "./feeStructure.scss"
import { AiOutlineDelete } from "react-icons/ai"
import { BsDownload } from "react-icons/bs"

const FeeStructure = ( {feeHeaderHeading} ) => {
  const { selectClass } = useContext(myContext)
  const [feesList, setFeesList] = useState([])
  const [inputText, setInputText] = useState('')
  const [inputAmount, setInputAmount] = useState('')

  

  const handleNameChange = (e) => {
    setInputText(e.target.value)
  }
  const handleAmountChange = (e) => {
    setInputAmount(e.target.value)
  }

  const addFeeItem = () => {
    setFeesList([
      ...feesList,
      { id: feesList.length + 1, name: inputText, amount: inputAmount },
    ])
    setInputText('')
    setInputAmount('')
  }

  const deleteTask = (id) => {
    setFeesList(feesList.filter(item => item.id !== id))
  }

  return (
    selectClass && (
      <div className="feeStructure">
        <div className="feeHeader">
          <h2 className="heading">{feeHeaderHeading}</h2>
          <button className="edit-btn btn">edit</button>
          <button className="add-btn btn" onClick={addFeeItem}> + Add fees</button>
          <button className="downloadBtn">
            <BsDownload className="downloadIcon" />
          </button>
        </div>
        <ul className="feeList">
          <li className="feeItemHeader">
            <p className="left">you are paying fees</p>
            <p className="right">rupees</p>
          </li>
          <li className="feeItem">
            <div>
              <p className="feeName">
                <input type="text" onChange={handleNameChange} value={inputText} />
              </p>
              <p className="feeAmount">Rs. <input type="number" onChange={handleAmountChange} value={inputAmount} />
              </p>
            </div>
            <AiOutlineDelete className="deleteIcon" />
          </li>
          {feesList.map(item => {
            return (
              <li className="feeItem" key={item.id}>
                <div>
                  <p className="feeName">{item.name}</p>
                  <p className="feeAmount">Rs. {item.amount}</p> 
                </div>
                <AiOutlineDelete className="deleteIcon" onClick={() => deleteTask(item.id)} />
              </li>
            )
          })}
        </ul>
        <div className="feeFooter">
          <p>Do you want to copy the fee structure </p>
          <input type="checkbox" id="checkbox" />
        </div>
      </div>)
  )
}

export default FeeStructure
