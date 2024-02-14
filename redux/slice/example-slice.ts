import { createSlice } from '@reduxjs/toolkit'
import { ExampleType } from '../type/example-type'

const InitialState: ExampleType = {}

const exampleSlice = createSlice({
    name: 'example',
    initialState: InitialState,
    reducers: {}
})

export default exampleSlice.reducer
export const {} = exampleSlice.actions
