import { useEffect, useState, React } from 'react'
import axios from 'axios'
import { BsCircleFill } from 'react-icons/bs';

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
      <section className='residents__img'>
        <img src={`${resident?.image}`} />
        <p>
          <BsCircleFill />{`${resident?.status}`}
        </p>
      </section>
      <section className='residents__data'>
        <table className='residents__table'>
          <tr>
            <th>
              <section className='residents__title'>
                <h2> {`${resident?.name}`}</h2>
              </section>
            </th>
          </tr>
          <tr>
            <th className='residents__tname'>Species</th>
          </tr>
          <tr>
            <td>{`${resident?.species}`}</td>
          </tr>
          <tr>
            <th className='residents__tname'>Type</th>
          </tr>
          <tr>
            <td>{`${resident?.type}`}</td>
          </tr>
          <tr>
            <th className='residents__tname'>Gender</th>
          </tr>
          <tr>
            <td>{`${resident?.gender}`}</td>
          </tr>
          <tr>
            <th className='residents__tname'>Origin</th> 
          </tr>
          <tr>
            <td>{`${resident?.origin.name}`}</td>
          </tr>
          <tr>
            <th className='residents__tname'>Location</th>
          </tr>
          <tr>
            <td>{`${resident?.location.name}`}</td>
          </tr>
          <tr>
            <th className='residents__tname'>Episodes where apper</th>
          </tr>
          <tr>
            <td>{`${resident?.episode.length}`}</td>
          </tr>
        </table>
      </section>
    </section>
  )
}

export default CardResident

/*
{'id':23,'name':'Arcade Atren','status':'unknown','species':'Atren','type':'','gender':'Male','origin':{'name':'unknown','url':''},'location':{'name':'Immortatrty Field Resort','url':'https://rickandmortyapi.com/api/location/7'},'image':'https://rickandmortyapi.com/api/character/avatar/23.jpeg','episode':['https://rickandmortyapi.com/api/episode/13','https://rickandmortyapi.com/api/episode/19','https://rickandmortyapi.com/api/episode/21','https://rickandmortyapi.com/api/episode/25','https://rickandmortyapi.com/api/episode/26'],'url':'https://rickandmortyapi.com/api/character/23','created':'2017-11-05T08:43:05.095Z'} */
