import Component from 'vue-class-component'
import {Vue, Prop} from 'vue-property-decorator'
import {Popper} from '../../components/popper'

@Component({
  components: {Popper}
})
export default class Popperable extends Vue {
  @Prop(Boolean) disabled: boolean

  @Prop({type: [String], default: 'hover'}) trigger: 'hover' | 'click'

  @Prop({type: [String], default: 'top'}) placement: 'top'| 'top-start'| 'top-end'|
    'bottom'| 'bottom-start'| 'bottom-end'| 'left'| 'left-start'| 'left-end'| 'right'| 'right-start'| 'right-end'

  get options () {
    return {
      placement: this.placement,
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        }
      }
    }
  }

  get enterActiveClass () {
    return {
      'top': 'slide-down-enter-active',
      'bottom': 'slide-up-enter-active',
      'left': 'slide-right-enter-active',
      'right': 'slide-left-enter-active'
    }
  }

  get leaveActiveClass () {
    return {
      'top': 'slide-down-leave-active',
      'bottom': 'slide-up-leave-active',
      'left': 'slide-right-leave-active',
      'right': 'slide-left-leave-active'
    }
  }
}
