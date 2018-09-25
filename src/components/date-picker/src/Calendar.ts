import Component from 'vue-class-component'
import {Vue, Emit, Prop} from 'vue-property-decorator'
import {CalendarType} from '@/components/date-picker/src/type'

@Component
export default class Calendar extends Vue {
  @Prop(Date) selectedDate: Date

  @Prop(Date) currentDate: Date

  @Emit() select (value: Date) {}

  @Emit('update:currentDate') currentDateUpdate (date: Date) {}

  @Emit() choose (value: CalendarType) {}
}
