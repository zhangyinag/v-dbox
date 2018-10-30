import {Component, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'

import BemMixin from '@/core/mixins/BemMixin'

@Component({
  components: {},
  })
export default class Progress extends mixins(BemMixin) {
  @Prop({type: String, default: '8px'}) strokeWidth: string

  @Prop({type: String, default: 'line'}) type: 'line' | 'circle'

  @Prop({type: Number, default: 0}) percent: number

  @Prop({type: String}) status: 'success' | 'exception' | 'active'

  @Prop({type: Boolean, default: true}) showText: boolean

  get strokeWidthStyle () {
    return {
      height: this.strokeWidth
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
}
