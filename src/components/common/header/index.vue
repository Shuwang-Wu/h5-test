<!--
 * @Author: Shuwang_wu
 * @Date: 2024-06-05 10:57:05
 * @LastEditTime: 2024-06-17 14:40:01
 * @LastEditors: Shuwang_wu
 * @FilePath: \luban-h5\front-end\h5\src\components\common\header\index.vue
 * @Description: please edit
-->
<template>
  <a-layout-header class="layout-header">
    <LogoOfHeader />
    <div style="float: right">
      <!-- <Links /> -->
      <slot name="action-menu"></slot>
      <LangSelect />
    </div>
  </a-layout-header>
</template>
<script>
import LogoOfHeader from './logo.js'
import LangSelect from './LangSelect'
// import Links from './links'
export default {
  name: 'Header',
  components: {
    LogoOfHeader,
    LangSelect
  }
}
</script>
<style lang="scss" scoped>
.layout-header {
  padding: 0 10px;
  .logo {
    display: flex;
    justify-content: center;
    width: 120px;
    height: 31px;
    margin: 16px 28px 16px 0;
    float: left;

    line-height: 31px;
    text-align: center;
    color: white;
    font-size: 16px;

    :deep(&-img) {
      display: block;
      width: 100px;
    }
  }

  .lang-select-activator,
  .user-avatar-activator {
    // float: right;
    background: transparent;
    margin: 0 28px 16px 0;
    cursor: pointer;

    .anticon {
      color: white;
    }
  }
}
</style>
