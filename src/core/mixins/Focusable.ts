import Component from 'vue-class-component'
import {Vue} from 'vue-property-decorator'

@Component
export default class Focusable extends Vue {

  mounted () {
    this.$el.tabIndex = -1
    this.$el.focus()
  }
}
