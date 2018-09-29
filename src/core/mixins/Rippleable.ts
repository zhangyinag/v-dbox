import Component from 'vue-class-component'
import {Vue, Prop} from 'vue-property-decorator'
import ripple from '@/core/directives/ripple'

@Component({
  directives: {ripple}
  })
export default class Rippleable extends Vue {
  @Prop({type: Boolean, default: true}) ripple: boolean
}
