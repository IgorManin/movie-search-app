import React from 'react'

import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useActions } from '../../useAction'

const Main = () => {
  const { randomFilm, isLoading } = useSelector((state) => state)

  const { getFilms } = useActions()

  console.log('randomFilm', randomFilm)

  return (
    <div style={{ width: '300px', height: '300px', border: '2px solid red' }}>
      {isLoading ? (
        <h4>Загрузка</h4>
      ) : (
        <>
          <Button variant="contained" onClick={getFilms}>
            Получить данные
          </Button>
          <Button variant="contained">Получить данные</Button>
        </>
      )}
    </div>
  )
}

export default Main
