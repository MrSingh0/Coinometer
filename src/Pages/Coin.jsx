import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Common/Header/Header';
import Loading from '../Components/Common/Loading/Loading';
import axios from 'axios';
import { coinObject } from '../Functions/convertObject';
import List from '../Components/Dashboard/List/List';
import CoinInfo from '../Components/Coin/CoinInfo/CoinInfo';
import { getCoinData } from '../Functions/getCoinData';
import { getCoinPrices } from '../Functions/getCoinPrices';
import LineChart from '../Components/Coin/LineChart/LineChart';
import { convertDate } from '../Functions/convertDate';
import SelectDays from '../Components/Coin/SelectDays/SelectDays';
import { settingChartData } from '../Functions/settingChartData';
import PriceToggle from '../Components/Coin/PriceToggle/PriceToggle';

const CoinPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(60);
    const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState("prices");

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    async function getData() {
        const data = await getCoinData(id);
        if (data) {
            coinObject(setCoinData, data);
            const prices = await getCoinPrices(id, days, priceType);
            if (prices.length > 0) {
                settingChartData(setChartData, prices);
                setIsLoading(false);
            }
        }
    }


    const handleDaysChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);
        const prices = await getCoinPrices(id, event.target.value, priceType);
        if (prices.length > 0) {
            settingChartData(setChartData, prices);
            setIsLoading(false);
        }
    };


    const handlePriceTypeChange = async(event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices = await getCoinPrices(id, days, newType);
        if (prices.length > 0) {
            settingChartData(setChartData, prices);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Header />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className='grey-wrapper' style={{ padding: "0rem 1rem" }}>
                        <List coin={coinData} />
                    </div>
                    <div className="grey-wrapper">
                        <SelectDays days={days} handleDaysChange={handleDaysChange} />
                        <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>

                        <LineChart chartData={chartData} priceType={priceType} />
                    </div>

                    <CoinInfo heading={coinData.name} desc={coinData.desc} />
                </>
            )
            }
        </div>
    )
}

export default CoinPage
