import Component from 'vue-class-component'
import {Vue, Inject} from 'vue-property-decorator'
import {ValidateState} from '@/components/form/src/type'

@Component
export default class Validatable extends Vue {
  @Inject({default: ''}) getValidateState: () => ValidateState
}
