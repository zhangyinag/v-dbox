import {Component, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'

import BemMixin from '@/core/mixins/BemMixin'
import {VNode} from 'vue'

@Component({
  components: {},
  })
export default class Badge extends mixins(BemMixin) {
  @Prop([String, Number]) value: number| string

  @Prop(Number) max: number

  @Prop(String) title: string

  @Prop(Boolean) dot: boolean


  get text() {
    if (!this.value) return ''
    if (typeof this.value === 'number') {
      if (!this.max) return this.value
      return this.value > this.max ? `${this.max}+` : this.value
    }
    return this.value
  }

  get aloneCls () {
    return this.$slots.default ? '' : this.m('alone')
  }

  get dotCls () {
    return !this.dot ? '' : this.m('dot', 'text')
  }

  $slots: {
    default: VNode[]
  }
}
