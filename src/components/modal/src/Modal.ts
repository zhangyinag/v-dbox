import {Component, Prop, Emit, Watch, Vue} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'

import BemMixin from '@/core/mixins/BemMixin'
import {VNode} from 'vue'
import {BeforeCloseCallBack} from '@/components/modal/src/type'

@Component({
  components: {},
  })
export default class Modal extends mixins(BemMixin) {
  @Prop(Boolean) visible: boolean

  @Prop({type: String, default: '416px'}) width: string

  @Prop(String) title: string

  @Prop({type: Boolean, default: true}) showClose: boolean

  @Prop({type: Boolean, default: true}) closeOnClickMask: boolean

  @Prop({type: Boolean, default: true}) closeOnPressEsc: boolean

  @Prop(Function) beforeClose: BeforeCloseCallBack

  @Prop({type: Boolean, default: true}) mask: boolean

  @Prop({type: Boolean, default: true}) appendToBody: boolean

  @Emit('update:visible') visibleUpdate (visible: boolean) {}

  private mousePosition: {x: number, y: number} | null = null

  private transformOriginStyle: any = {}

  get widthStyle () {
    return {
      width: this.width
    }
  }

  get maskCls () {
    return !this.mask ? '' : this.m('mask', 'wrapper')
  }

  private onWrapperClick () {
    if (!this.closeOnClickMask) return
    this.onClose()
  }

  private onWrapperEsc () {
    if (!this.closeOnPressEsc) return
    this.onClose()
  }

  private onClose () {
    const done = () => {
      this.visibleUpdate(false)
    }
    const cancel = () => {
    }
    if (this.beforeClose){
      this.beforeClose(done, cancel)
    } else {
      this.visibleUpdate(false)
    }
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (visible) {
      this.$nextTick().then(() => { // wait until wrapper visible
        if (this.mousePosition) {
          let x = this.mousePosition.x - this.$refs.modal.offsetLeft
          let y = this.mousePosition.y - this.$refs.modal.offsetTop
          this.transformOriginStyle = {transformOrigin: `${x}px ${y}px 0px`}
        }
        this.$refs.tab.focus()
      })
    }
  }

  mounted () {
    const clickHandler = (e: MouseEvent) => {
      this.mousePosition = {x: e.pageX, y: e.pageY}
      // 200ms cancel, in case not triggered by click
      setTimeout(() => {
        this.mousePosition = null
      }, 200)
    }
    document.addEventListener('click', clickHandler)
    this.$once('hook:beforeDestroy', function () {
      document.removeEventListener('click', clickHandler)
    })

    if (this.appendToBody) {
      document.body.appendChild(this.$el)
    }
  }

  $refs: any = {
    modal: HTMLElement,
    tab: HTMLElement,
  }

  $slots: {
    header: VNode[],
    footer: VNode[]
  }
}
