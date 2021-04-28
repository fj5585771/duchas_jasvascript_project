import { useState, useEffect } from "react";

const CountyChanger = ({changeCountyID}) => {

    const [countyID, setCountyID] = useState("100000")

    const handleCountyChange = (event) => {
        setCountyID(event.target.value)
    }

    useEffect (() => {
        changeCountyID(countyID)
    }, [countyID])


    return (

        <>
            <label>Change County: </label>
            <select name="county-changer"
                    onChange={handleCountyChange}>
                <option value="100000">Antrim</option>
                <option value="100001">Armagh</option>
                <option value="100004">Carlow</option>
                <option value="100003">Cavan</option>
                <option value="100009">Clare</option>
                <option value="100010">Cork</option>
                <option value="100011">Derry</option>
                <option value="100013">Donegal</option>
                <option value="100012">Down</option>
                <option value="100002">Dublin</option>
                <option value="100014">Fermanagh</option>
                <option value="100015">Galway</option>
                <option value="100005">Kerry</option>
                <option value="100007">Kildare</option>
                <option value="100006">Kilkenny</option>
                <option value="100017">Laois</option>
                <option value="100018">Leitrim</option>
                <option value="100022">Limerick</option>
                <option value="100020">Longford</option>
                <option value="100021">Louth</option>
                <option value="100023">Mayo</option>
                <option value="100024">Meath</option>
                <option value="100025">Monaghan</option>
                <option value="100031">Offaly</option>
                <option value="100027">Roscommon</option>
                <option value="100028">Sligo</option>
                <option value="100029">Tipperary</option>
                <option value="100030">Tyrone</option>
                <option value="100026">Waterford</option>
                <option value="100019">Wexford</option>
                <option value="100016">Westmeath</option>
                <option value="100008">Wicklow</option>
            </select>

        </>
    )
};

export default CountyChanger;