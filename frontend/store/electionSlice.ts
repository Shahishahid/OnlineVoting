import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Election {
  _id: string
  title: string
  candidates: any[]
}

interface ElectionState {
  list: Election[]
  selectedElection: Election | null
  results: any | null
}

const initialState: ElectionState = {
  list: [],
  selectedElection: null,
  results: null
}

const electionSlice = createSlice({
  name: 'elections',
  initialState,
  reducers: {
    setElections(state, action: PayloadAction<Election[]>) {
      state.list = action.payload
    },
    setSelectedElection(state, action: PayloadAction<Election>) {
      state.selectedElection = action.payload
    },
    setResults(state, action: PayloadAction<any>) {
      state.results = action.payload
    }
  }
})

export const { setElections, setSelectedElection, setResults } = electionSlice.actions
export default electionSlice.reducer
