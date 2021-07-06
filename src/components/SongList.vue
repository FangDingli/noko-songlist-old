<template>
  <NDataTable :columns="columns"></NDataTable>
</template>

<script setup lang="ts">
interface TableData {
  songId: number
  title: string
  album: string
  artist: string
}

import { h } from '@vue/runtime-core'
import { NDataTable, NTag } from 'naive-ui'

const columns = () => [
  {
    title: '歌名',
    key: 'title',
  },
  {
    title: '歌手',
    key: 'artist',
    render(row: TableData) {
      return h(NTag, { type: 'success' }, { default: () => row.artist })
    },
  },
]
</script>

<style></style>
