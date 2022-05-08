import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Fields = "title" | "artist" | "releaseYear" | "albumName"

type RoundQuestions = {
  [fields in Fields]: {
    answer: string
    revealed: boolean
    winner?: string
  }
}

type Round = RoundQuestions & {
  songId: string
}

type Playlist = {
  id: string
  name: string
}

type Game = {
  playlist: Playlist
  playerNames: string[]
  currentRound: Round | null
  history: Round[]
  activeFields: Fields[]
}

const initialState: Game = {
  playlist: {
    id: "",
    name: "",
  },
  playerNames: [],
  currentRound: null,
  history: [],
  activeFields: [],
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlaylist: (state, action: PayloadAction<Playlist>) => ({
      ...state,
      playlist: action.payload,
    }),
    setPlayerNames: (state, action: PayloadAction<string[]>) => ({
      ...state,
      playerNames: action.payload,
    }),
    resetGame: () => initialState,
  },
})

export const gameActions = gameSlice.actions
