import { useContext } from "react"
import { myContext } from "../../App"
import './classSelector.scss'
import Select from 'react-select'

const ClassSelector = () => {
    const {selectClass, setSelectClass} = useContext(myContext)
    const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' },
    ]
    return (
        <div className='classSelector'>
            <h1 className="heading">Assign Fees to Class</h1>
            <h2 className="subHeading">Class</h2>
            <div className="select">
                <Select options={options}
                    placeholder="Select"
                    defaultInputValue={selectClass}
                    onChange={setSelectClass} />
            </div>
            <p>select your class and pay fees</p>
        </div>
    )
}

export default ClassSelector
