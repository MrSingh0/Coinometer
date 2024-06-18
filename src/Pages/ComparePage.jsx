import React from 'react'
import Header from '../Components/Common/Header/Header'
import SelectCoins from '../Components/Compare/SelectCoins/SelectCoins'
import { useState } from 'react'

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  return (
    <div>
      <Header/>
      <SelectCoins crypto1={crypto1} setCryptol={setCrypto1} crypto2={crypto2} setCrypto2={setCrypto2}/>
    </div>
  )
}

export default ComparePage
