<template>
  <div id="app">
    <router-view></router-view>
    <div class="bottom-menu">
      <router-link class="menu-item" to="/PageOne">PageOne</router-link>
      <router-link class="menu-item" to="/PageTwo">PageTwo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.bottom-menu {
  bottom: 0;
  width: 100%;
  display: flex;
  position: fixed;
}

.menu-item {
  flex: 1;
  padding: 14px;
  text-align: center;
  border: 1px solid red;
}
</style>