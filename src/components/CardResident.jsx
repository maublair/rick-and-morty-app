import { useEffect, useState, React } from 'react'
import axios from 'axios'

const CardResident = ({ residents }) => {
  console.log(residents)
  const [resident, setResident] = useState()
  useEffect(() => {
    const URL = `${residents}`
    axios.get(URL)
      .then(res => {
        setResident(res.data)
      }
      )
      .catch(err => console.log(err))
  }, [])
  console.log(resident)
  return (
    <section className='residents__card'>
      <section className='residents__title'>
        <h2> {`${resident?.name}`}</h2>
        <div>
          <span>Status: </span>
          <div>
            {`${resident?.status}`}
          </div>
        </div>
      </section>
      <section className='residents__img'>
        <img src={`${resident?.image}`} />
      </section>
      <section className='residents__data'>
        <ul className='residents__list'>
          <li>
            <span>Name: </span>
            {`${resident?.name}`}
          </li>
          <li>
            <span>Species: </span>
            {`${resident?.species}`}
          </li>
          <li>
            <span>Type: </span>
            {`${resident?.type}`}
          </li>
          <li>
            <span>Gender: </span>
            {`${resident?.gender}`}
          </li>
          <li>
            <span>Origin: </span>
            {`${resident?.origin.name}`}
          </li>
          <li>
            <span>Location: </span>
            {`${resident?.location.name}`}
          </li>
          <li>
            <span>Episodes where apper: </span>
            {`${resident?.episode.length}`}
          </li>
        </ul>
      </section>
    </section>
  )
}

export default CardResident

/*
{'id':23,'name':'Arcade Alien','status':'unknown','species':'Alien','type':'','gender':'Male','origin':{'name':'unknown','url':''},'location':{'name':'Immortality Field Resort','url':'https://rickandmortyapi.com/api/location/7'},'image':'https://rickandmortyapi.com/api/character/avatar/23.jpeg','episode':['https://rickandmortyapi.com/api/episode/13','https://rickandmortyapi.com/api/episode/19','https://rickandmortyapi.com/api/episode/21','https://rickandmortyapi.com/api/episode/25','https://rickandmortyapi.com/api/episode/26'],'url':'https://rickandmortyapi.com/api/character/23','created':'2017-11-05T08:43:05.095Z'} */
