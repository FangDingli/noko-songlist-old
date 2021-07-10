<template>
  <NDataTable
    :columns="columns"
    :data="dataList"
    :row-key="rowData => rowData.songId"
    virtual-scroll
    :max-height="'100%'"
    size="small"
  ></NDataTable>
</template>

<script setup lang="ts">
import type { TableData } from '@/store'

import { h, defineProps, toRefs } from 'vue'
import { NDataTable, NTag } from 'naive-ui'

const props = defineProps<{ dataList: TableData[] }>()

const { dataList } = toRefs(props)

const columnsGen = () => [
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

const columns = columnsGen()
</script>

<style></style>
