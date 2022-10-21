import { useEffect, useState, React } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber.js'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import NavBar from './components/NavBar'
import BannerBG from './components/BannerBG'
import ErrorSearch from './components/ErrorSearch'
import './style/navBar.css'
import './style/style.css'

function App() {
  const [location, setLocation] = useState()
  const [residents, setResidents] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)
  const handleChange = (event) => {
    if (event.target.value === '') {
      return suggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
      axios
        .get(URL)
        .then((res) => setSuggestedList(res.data.results))
        .catch((err) => console.log(err))
    }
  }
  console.log(suggestedList)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }
  useEffect(() => {
    let idSearch = getRandomNumber()
    if (searchInput) {
      idSearch = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${idSearch}`
    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data)
        setResidents(res.data.residents)
        setHasError(false)
      })
      .catch((_err) => {
        setHasError(true)
      })
  }, [searchInput])
  return (
    <>
      <NavBar />
      <BannerBG />
      <div className='App'>
        <section className='main__data'>
          <form onSubmit={handleSubmit}>
            <input
              id='idLocation'
              type='text'
              placeholder='Enter a number from 1 to 126'
              onChange={handleChange}
            />
            <button className='btn__search' type='submit'>
              Search
            </button>
            <FilterList
              suggestedList={suggestedList}
              setSearchInput={setSearchInput}
            />
          </form>
          {hasError
            ? (<ErrorSearch />)
            : (
              <>
                <LocationInfo location={location} />
                <div className='residentsCard'>
                  {location?.residents.map((residents) => (
                    <CardResident key={residents} residents={residents} />
                  ))}
                </div>
              </>
              )}
        </section>
      </div>
    </>
  )
}

export default App
