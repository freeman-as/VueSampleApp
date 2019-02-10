<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link v-bind:to="{path: '/product'}">商品情報</router-link>
    </nav>
    <transition name="view">
      <router-view/>
    </transition>
  </div>
</template>

<style>
.router-link-active {
  background-color: #f00;
}
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter,
.view-leave-to {
  opacity: 0;
}
</style>

