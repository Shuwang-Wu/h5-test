/*
 * @Author: Shuwang_wu
 * @Date: 2024-06-05 10:57:05
 * @LastEditTime: 2024-06-20 15:23:42
 * @LastEditors: Shuwang_wu
 * @FilePath: \luban-h5\front-end\h5\src\components\core\editor\right-panel\index.js
 * @Description: please edit
 */
import RenderPropsEditor from './props'
import RenderAnimationEditor from './animation'
// import RenderActionEditor from './action'
import RenderBackgroundEditor from './background'
export default {
  name: 'ElementPropsEditor',
  props: {
    width: {
      type: Number,
      default: 320
    }
  },
  data: () => ({
    activeTabKey: '页面'
  }),
  methods: {
    /**
     * #!zh: 设置 页面图tab 作为 active tab
     * #!en: set background(bg) tab as active tab
     */
    setActiveTab (activeTabKey) {
      this.activeTabKey = activeTabKey
    }
  },
  render (h) {
    return (
      <a-layout-sider
        width={this.width}
        data-set-width={this.width}
        theme='light'
        style={{ background: '#fff', padding: '0 6px 0 6px' }}
      >
        <a-tabs
          style="height: 100%;"
          tabBarGutter={10}
          defaultActiveKey={this.activeTabKey}
          activeKey={this.activeTabKey}
          onChange={this.setActiveTab}
        >
          <a-tab-pane key="属性"><span slot="tab">{this.$t('editor.editPanel.tab.prop')}</span><RenderPropsEditor/></a-tab-pane>
          <a-tab-pane label="动画" key='动画' tab={this.$t('editor.editPanel.tab.animation')}><RenderAnimationEditor /></a-tab-pane>
          {/* <a-tab-pane label="动作" key='动作' tab={this.$t('editor.editPanel.tab.action')}>{ this.activeTabKey === '动作' && <RenderActionEditor/> }</a-tab-pane> */}
          <a-tab-pane label="页面" key='页面' tab={this.$t('editor.editPanel.tab.page')}>{ this.activeTabKey === '页面' && <RenderBackgroundEditor/> }</a-tab-pane>
        </a-tabs>
      </a-layout-sider>
    )
  },
  created () {
    window.EditorApp.$on('setEditingElement', ({ name }) => {
      this.setActiveTab(name === 'lbp-background' ? '页面' : '属性')
    })
  }
}
