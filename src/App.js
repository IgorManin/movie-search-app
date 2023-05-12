import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import Other from './pages/Other'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #0f0c29, #302b63, #2c5364);
  padding: 0;
  margin: 0;
`
// todo lazyloading elements
// todo react-query вместо think
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
