<template>
  <NConfigProvider :theme="currTheme">
    <NSpace vertical>
      <NLayout embedded class="container">
        <NLayoutHeader><Header :songListAll="songListAll"></Header></NLayoutHeader>
        <NLayoutContent class="content"
          ><NSpin size="large" :show="isLoading"
            ><SongList :dataList="currSongList"></SongList
          ></NSpin>
        </NLayoutContent>
      </NLayout>
    </NSpace>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import type { StateProps, TableData } from '@/store'
import {
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NSpin,
  NConfigProvider,
  darkTheme,
  useOsTheme,
} from 'naive-ui'
import { getSongList } from '@/api/'
import SongList from './components/SongList.vue'
import Header from './components/Header.vue'

const osTheme = useOsTheme()
const currTheme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))
const store = useStore<StateProps>()

const isLoading = computed(() => store.state.isLoading)
// const songListAll = computed(() => store.state.songListAll)
let songListAll = ref<TableData[]>([])
const currSongList = computed(() => store.getters.getSongListCurr)

getSongList('/songshower/show?username=noko', {
  param: '',
  randomFlag: false,
  type: 'none',
}).then(res => {
  store.commit('setSongListAll', res)
  store.commit('setSongListCurr', res)
  songListAll.value = res as TableData[]
  store.commit('setLoading', false)
})
</script>

<style>
.content {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.fullscreen_loading {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.3);
  z-index: 5;
}

@media (max-width: 768px) {
  .content {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
