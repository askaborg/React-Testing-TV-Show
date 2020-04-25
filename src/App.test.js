import React from 'react'
import * as rtl from '@testing-library/react'

import App from './App'

test("renders App", async () => {
    const wrapper = rtl.render(<App />)
    const element = wrapper.queryByText(/fetching data.../i)
    expect(element).toBeInTheDocument
})


test("App fetches Stranger Things poster", async ()=>{
  const {getByText} = rtl.render(<App />)

  getByText(/fetching data.../i);
  await rtl.waitFor(()=> {
    expect(/stranger things/i).toBeInTheDocument
  })
})

test("App displays Select a season dropdown", async ()=>{
    const {getByText} = rtl.render(<App />)
  
    getByText(/fetching data.../i);
    await rtl.waitFor(()=> {
      expect(/select a season/i).toBeInTheDocument
    })
  })