<template>
  <!-- <div id="nav">
		<router-link to="/">{{ $t("nav.home") }}</router-link> |
		<router-link to="/about">{{ $t("nav.about") }}</router-link> |
		<router-link to="/example">{{ $t("nav.example") }}</router-link>
	</div> -->
  <!-- <router-view /> -->
  <!-- <div hidden>我知道你肯定会修改这里的^.^</div> -->
  <NSpace vertical size="large">
    <NLayout>
      <NLayoutHeader>这是脑袋</NLayoutHeader>
      <NLayoutContent>这是内容</NLayoutContent>
    </NLayout>
  </NSpace>
</template>

<script setup lang="ts">
import { NSpace, NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui'
import Base from '@/lib/ts/Base'

const getSongList = Base.NetBase.create({
  baseUrl: 'http://songlist-back.noko.live',
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
