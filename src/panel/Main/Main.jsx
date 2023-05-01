import React from 'react'
import { getFilms } from '../../state/axios'
import { Button } from '@mui/material'

const Main = () => {
  return (
    <div style={{ width: '300px', height: '300px', border: '2px solid red' }}>
      <Button variant="contained" onClick={() => getFilms()}>
        Получить данные
      </Button>
    </div>
  )
}

export default Main
