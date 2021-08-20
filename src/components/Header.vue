<template>
  <div class="header">
    <div class="logo">
      <img :src="nokoUrl" alt="" />
    </div>
    <div>
      <NInputGroup>
        <NInput
          v-model:value="inputValue"
          type="text"
          @keyup.enter="handleSearch"
          placeholder="输入歌名或歌手"
        ></NInput>
        <NButton ghost @click="handleSearch" v-show="!randomMode">
          <template #icon>
            <i class="iconfont icon-sousuo"></i>
          </template>
        </NButton>
        <NButton ghost @click="resetCurrList" v-show="randomMode">
          <template #icon>
            <i class="iconfont icon-chongzhi"></i>
          </template>
        </NButton>
        <NButton ghost @click="handleRandom">
          <template #icon>
            <i class="iconfont icon-touzi"></i>
          </template>
        </NButton>
      </NInputGroup>
    </div>
    <div style="width: 50px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import { useStore } from 'vuex'
import type { TableData, StateProps } from '@/store'
import { NInput, NInputGroup, NButton } from 'naive-ui'
import nokoUrl from '@/assets/noko.png'
import '@/assets/iconfont/iconfont.css'

const store = useStore<StateProps>()
const props = defineProps<{ songListAll: TableData[] }>()
let inputValue = ref('')

let randomMode = ref(false)

watch(inputValue, val => {
  if (val.length === 0) {
    resetCurrList()
  }
})

const resetCurrList = () => {
  randomMode.value = false
  store.commit('setLoading', true)
  store.commit('setSongListCurr', store.state.songListAll)
  store.commit('setLoading', false)
}

const handleSearch = () => {
  store.commit('setLoading', true)
  const temp: TableData[] = []
  if (inputValue.value === '') {
    return
  } else {
    const patt = new RegExp(inputValue.value, 'i')
    props.songListAll.forEach(item => {
      if (patt.test(item.title) || patt.test(item.artist)) {
        temp.push(item)
      }
    })
  }
  store.commit('setSongListCurr', temp)
  store.commit('setLoading', false)
}

function getRandom(min: number, max: number): number {
  const range = max - min
  const rand = Math.random()
  const number = min + Math.round(rand * range)

  return number
}

const handleRandom = () => {
  randomMode.value = true
  store.commit('setSongListCurr', [
    store.state.songListAll[getRandom(0, props.songListAll.length - 1)],
  ])
}
</script>

<style scoped>
.header {
  background-color: #e4b694;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 50px;
  height: 50px;
  margin-left: 5%;
}
.logo img {
  width: 50px;
  height: 50px;
  transition: none;
}
</style>
