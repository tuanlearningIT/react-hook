import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
const useFetch = (url, isCovidData) => {

    const [data, setDataCovid] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                });
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0 && isCovidData === true) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY')
                    })
                    data = data.reverse()
                }
                setDataCovid(data);
                setIsLoadingData(false)
                setIsError(false)

            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request cancel', err.message)
                } else {
                    setIsLoadingData(false)
                    setIsError(true)
                }

            }
        }
        setTimeout(() => {
            fetchData();
        }, 3000)


        return () => {
            ourRequest.cancel('Operation canceled by the user.')
        }
    }, [url])



    return (
        { data, isLoadingData, isError }
    )
}

export default useFetch;