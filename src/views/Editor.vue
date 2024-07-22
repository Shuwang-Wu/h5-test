<!--
 * @Author: Shuwang_wu
 * @Date: 2024-06-05 10:57:05
 * @LastEditTime: 2024-06-05 14:24:50
 * @LastEditors: Shuwang_wu
 * @FilePath: \luban-h5\front-end\h5\src\views\Editor.vue
 * @Description: please edit
-->
<script>
import CoreEditor from 'core/index.js'
export default {
  render () {
    return (
      <CoreEditor workId={this.$route.params.workId} />
    )
  }
}
</script>
