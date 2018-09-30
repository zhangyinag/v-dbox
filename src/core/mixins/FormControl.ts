import {Component, Inject} from 'vue-property-decorator'
import {Vue} from 'vue-property-decorator'

@Component
export default class FormControl extends Vue {

  @Inject({default: false}) valid: boolean

  @Inject({default: false}) invalid: boolean

  @Inject({default: ''}) formSize: 'sm' | 'lg'
}
