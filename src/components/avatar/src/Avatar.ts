import {Component, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'

import BemMixin from '@/core/mixins/BemMixin'
import {AvatarShape} from '@/components/avatar/src/type'
import {IconFont} from '@/components/iconfont/index'

@Component({
  components: {IconFont},
  })
export default class Avatar extends mixins(BemMixin) {
  @Prop({type: String, default: 'circle'}) shape: AvatarShape

  @Prop(String) icon: string

  @Prop(String) size: 'sm' | 'lg'

  @Prop(String) src: string

  get sizeCls (): string {
    if (this.size !== 'sm' && this.size !== 'lg') return ''
    return this.m(this.size)
  }

  get shapeCls () {
    if (!this.shape) return ''
    return this.m(this.shape)
  }

  get imageCls () {
    if (!this.src) return ''
    return this.m('image')
  }

  scaleText () {
    if (this.$refs.text && this.$refs.text.style) {
      let width = this.$refs.text.scrollWidth
      let parentWidth = this.$el.offsetWidth - 8
      let scale = parentWidth/width
      if (scale < 1) {
        this.$refs.text.style.transform = `scale(${parentWidth/width}) translateX(-3px)`
      }
    }
  }

  mounted () {
    this.scaleText()
  }

  updated () {
    this.scaleText()
  }

  $refs: any = {
    text: HTMLElement
  }
}
