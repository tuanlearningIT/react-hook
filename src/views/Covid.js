import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import useFetch from "../customize/useFetch";

const Covid = () => {

    const today = moment().startOf('day').toISOString(true);
    const priorDate = moment().startOf('day').subtract(31, 'day').toISOString(true)

    let { data: dataCovid, isLoadingData, isError }// useFetch('https://api.covid19api.com/country/VietNam?from=2022-02-12T00:00:00Z&to=2022-03-11T00:00:00Z')
        = useFetch(`https://api.covid19api.com/country/VietNam?from=${priorDate}&to=${today}`, true);

    return (
        <div style={{ 'height': '135vh' }}>
            <div>
                Covid Việt Nam trong 30 ngày qua:
            </div>

            <table id="customers">

                <tbody>
                    <tr>
                        <th>Country</th>
                        <th>Date</th>
                        <th>Active</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                    {isError === false && isLoadingData === false &&
                        dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Country}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>

                            )
                        })
                    }

                    {isLoadingData === true &&
                        <tr >
                            <td style={{ 'textAlign': 'center' }} colSpan='6'>
                                LoadingData...
                            </td>
                        </tr>
                    }
                    {isError === true &&
                        <tr >
                            <td style={{ 'textAlign': 'center' }} colSpan='6'>
                                Something Wrong...
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Covid;