import { createStore } from "vuex"

export interface StateProps {
  isLoading: boolean
  songListAll: TableData[]
  songListCurr: TableData[]
}

export interface TableData {
  songId: number
  title: string
  album: string
  artist: string
}

const store = createStore<StateProps>({
  state: {
    isLoading: true,
    songListAll: [],
    songListCurr: []
  },
  mutations: {
    setSongListAll(state, payload: TableData[]) {
      state.songListAll = payload
    },
    setSongListCurr(state, payload: TableData[]) {
      state.songListCurr = payload
    },
    setLoading(state, payload: boolean) {
      state.isLoading = payload
    }
  },
  actions: {
    setSongListAll(context, payload: TableData[]) {
      context.commit("setSongListAll", payload)
    },
    setSongListCurr(context, payload: TableData[]) {
      context.commit("setSongListCurr", payload)
    },
    setLoading(context, payload: boolean) {
      context.commit("setLoading", payload)
    }
  },
  getters: {
    getSongListCurr(state: StateProps) {
      return state.songListCurr
    }
  }
});


export default store;