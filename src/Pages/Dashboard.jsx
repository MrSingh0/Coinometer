import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header/Header'
import TabsComponent from '../Components/Dashboard/Tabs/TabsComponent'
import axios from 'axios'
import Search from '../Components/Dashboard/Search/Search'
import PaginationComponent from '../Components/Dashboard/Pagination/Pagination'
import Loading from '../Components/Common/Loading/Loading'
import BackToTop from '../Components/Common/BackToTop/BackToTop'
import { get100Coins } from '../Functions/get100coins'

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedcoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async ()=>{
    const myCoins = await get100Coins();

    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <BackToTop/>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedcoins} />
          {!search && (<PaginationComponent page={page} handlePageChange={handlePageChange} />)}

        </div>
      )}
    </>

  )
}

export default DashboardPage
