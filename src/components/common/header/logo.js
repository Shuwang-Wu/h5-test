/*
 * @Author: Shuwang_wu
 * @Date: 2024-06-05 10:57:05
 * @LastEditTime: 2024-06-17 14:39:53
 * @LastEditors: Shuwang_wu
 * @FilePath: \luban-h5\front-end\h5\src\components\common\header\logo.js
 * @Description: please edit
 */
import logoPng from '@/assets/logo.png'

export default {
  render () {
    return (
      <div class="logo">
        <router-link to={{ path: '/' }}>
          <img class="logo-img" style="height: 100%" src={logoPng} alt="" />
          {/* {this.$t('app.title')} */}
        </router-link>
      </div>
    )
  }
}
