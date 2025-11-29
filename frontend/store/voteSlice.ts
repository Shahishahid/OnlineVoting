import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface VoteState {
  lastVote: any | null
  isVoting: boolean
}

const initialState: VoteState = {
  lastVote: null,
  isVoting: false
}

const voteSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    voteStart(state) {
      state.isVoting = true
    },
    voteSuccess(state, action: PayloadAction<any>) {
      state.lastVote = action.payload
      state.isVoting = false
    },
    voteFail(state) {
      state.isVoting = false
    }
  }
})

export const { voteStart, voteSuccess, voteFail } = voteSlice.actions
export default voteSlice.reducer
