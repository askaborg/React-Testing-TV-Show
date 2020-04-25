import React from 'react'
import * as rtl from '@testing-library/react'

import Episodes from './Episodes'

test("renders Episodes", async () => {
    const wrapper = rtl.render(<Episodes episodes={[]} />)
})