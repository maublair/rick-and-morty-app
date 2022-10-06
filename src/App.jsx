import { useEffect, useState, React } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber.js'
import './App.css'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import NavBar from './components/NavBar'
import BannerBG from './components/BannerBG'

function App() {
  const [location, setLocation] = useState()
  const [residents, setResidents] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const handleChange = event => {
    if (event.target.value === '') {
      return suggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
      axios
        .get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))
    }
  }
  console.log(suggestedList)
  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }
  useEffect(
    () => {
      let idSearch = getRandomNumber()
      if (searchInput) {
        idSearch = searchInput
      }
      const URL = `https://rickandmortyapi.com/api/location/${idSearch}`
      axios
        .get(URL)
        .then(res => {
          setLocation(res.data)
          setResidents(res.data.residents)
        })
        .catch(err => console.log(err))
    },
    [searchInput]
  )
  return (
    <>
      <NavBar />
      <BannerBG />
      <div className='App'>
        <section className='sideBar__container'>
          <section className='loacation__data'>
            <a href='#' className='image avatar'>
              <img src='images/avatar.jpg' alt='' />
            </a>
            <h1>
              <strong>I am Strata</strong>, a super simple
              <br />
              responsive site template freebie
              <br />
              crafted by <a href='http://html5up.net'>HTML5 UP</a>.
            </h1>
          </section>
        </section>
        <section className='main__data'>
          <form onSubmit={handleSubmit}>
            <input id='idLocation' type='text' placeholder='Enter a number from 1 to 126' onChange={handleChange} />
            <button type='submit'>Search</button>
            <FilterList suggestedList={suggestedList} setSearchInput={setSearchInput} />
          </form>
          <h1>Rick and Morty</h1>
          <LocationInfo location={location} />
          <div>{location?.residents.map(residents => <CardResident key={residents} residents={residents} />)}</div>
        </section>
      </div>
    </>
  )
}

export default App
