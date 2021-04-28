import { useState, useEffect } from 'react'

const DateRangeChanger = ({changeParentDateRange}) => {

    const [startDate, setStartDate] = useState("1930")

    const handleDateChange = (event) => {
        setStartDate(event.target.value)
    }

    useEffect ((year) => {
        changeParentDateRange(startDate)
    }, [startDate])

    return (
        <> 
            <label>Change Decade: </label>
            <select name="decade-changer"
                    onChange={handleDateChange}
            >
                <option value="1930">Select Decade</option>   
                <option value="1910">1910s</option>
                <option value="1920">1920s</option>
                <option value="1930">1930s</option>
                <option value="1940">1940s</option>
                <option value="1950">1950s</option>
                <option value="1960">1960s</option>
                <option value="1970">1970s</option>
                <option value="1980">1980s</option>
                <option value="1990">1990s</option>
                <option value="2000">2000s</option>
                <option value="2010">2010s</option>


            </select>
        </>
    )
};

export default DateRangeChanger;