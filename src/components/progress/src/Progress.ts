import {Component, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'

import BemMixin from '@/core/mixins/BemMixin'
import ProgressCircle from './ProgressCircle.vue'

@Component({
  components: {ProgressCircle},
  })
export default class Progress extends mixins(BemMixin) {
  @Prop({type: Number, default: 8}) strokeWidth: number

  @Prop({type: String, default: 'line'}) type: 'line' | 'circle'

  @Prop({type: Number, default: 0}) percent: number

  @Prop({type: String}) status: 'success' | 'exception' | 'active'

  @Prop({type: Boolean, default: true}) showText: boolean

  @Prop({type: Number, default: 120}) width: number

  get strokeWidthStyle () {
    return {
      height: this.strokeWidth + 'px'
    }
  }

  get typeCls () {
    return this.m(this.type)
  }

  get percentWidth () {
    return {
      width: this.percent + '%'
    }
  }

  get showTextCls () {
    if (!this.showText) return ''
    return this.m('show-text')
  }

  get statusCls () {
    if (!this.status) return ''
    return this.m(`status-${this.status}`)
  }

  get circleInnerStyle () {
    return {
      width: this.width + 'px',
      height: this.width + 'px',
      fontSize: (this.width * 0.15 + 6) + 'px'
    }
  }
}
