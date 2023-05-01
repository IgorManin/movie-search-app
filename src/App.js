import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './panel/Main/Main'
import Other from './panel/Other'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  height: 100vh;
  background-color: green;
`

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="other" element={<Other />}></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
