<template>
    <div :class="[b()]"
         @keydown.down.prevent="changeActiveOption(1)"
         @keydown.up.prevent="changeActiveOption(-1)"
         @keydown.enter.prevent="selectOption">
        <popper trigger="click"
                :enter-active-class="enterActiveClass"
                :leave-active-class="leaveActiveClass"
                :visible-arrow="false"
                :delay-on-mouse-over="200"
                :delay-on-mouse-out="200"
                :disabled="disabled"
                ref="popper"
                @show="onShow"
                @hide="onHide"
                :options="options">
            <span class="popper" :class="[e('popper')]">
                <ul :class="[e('dropdown')]">
                    <slot></slot>
                    <li v-if="noData" :class="[e('nodataitem')]">{{t('select.noDataText')}}</li>
                </ul>
            </span>

            <select-selection slot="reference"
                              :dropdown-visible="dropdownVisible"
                              :size="size"
                              :disabled="disabled"
                              :placeholder="placeholder"
                              :clearable="clearable"
                              :multiple="multiple"
                              :filterable="filterable"
                              @search="onSearch"
                              :selected-options.sync="selectedOptions"></select-selection>
        </popper>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop, Provide, Watch} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'
import {Popper} from '../../popper/index'
import SelectSelection from './SelectSelection.vue'
import Option from './Option.vue'
import {SelectOption} from './type'

@Component({
  components: {IconFont, Popper, SelectSelection},
  })
export default class Select extends BaseComponent {
  @Prop(Boolean) disabled: boolean

  @Prop() @Model('input') value: any

  @Prop(String) size: 'sm' | 'lg'

  @Prop(String) suffixIcon: string

  @Prop(Boolean) clearable: boolean

  @Prop(Boolean) multiple: boolean

  @Prop(String) placeholder: string

  @Prop(Boolean) filterable: boolean

  @Prop({type: [String], default: 'bottom-start'}) placement: 'top'| 'top-start'| 'top-end'|
    'bottom'| 'bottom-start'| 'bottom-end'| 'left'| 'left-start'| 'left-end'| 'right'| 'right-start'| 'right-end'

  bemBlock: string = 'select'

  dropdownVisible: boolean = false

  optionComps: Option[] = []

  noData: boolean = false

  activeOption: Option| null = null

  get selectedOptions (): SelectOption[] {
    if (this.value === undefined || this.value === null) return []
    let arr: SelectOption[] = []
    if (Array.isArray(this.value)) arr.push(...this.value)
    else arr.push(this.value)
    return arr.map(v => {
      let comp = this.optionComps.find(w => (w as any).label === v) as any
      if (!comp && !v) return null // doesn't count value is '' and not have option
      let text = comp && comp.text
      return {
        label: v,
        text
      }
    }).filter(v => !!v) as SelectOption[]
  }

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

  set selectedOptions (selectedOptions: SelectOption[]) {
    if (this.multiple) {
      this.input(selectedOptions.map(v => v.label))
    } else {
      this.input(selectedOptions[0] && selectedOptions[0].label)
    }
  }

  @Provide() addOptionComp (comp: Option) {
    this.optionComps.push(comp)
  }

  @Provide() removeOptionComp (comp: Option) {
    let idx = this.optionComps.findIndex(v => v === comp)
    if (idx !== -1) this.optionComps.splice(idx, 1)
  }

  @Provide() getValue (): any {
    return this.value
  }

  @Provide() setValue (value: any): any {
    this.input(value)
  }

  @Provide() close () {
    const $popper = this.$refs.popper as any
    if ($popper) $popper.doClose()
  }

  @Provide() getMultiple (): boolean {
    return this.multiple
  }

  @Provide() setActiveOption (activeOption: Option| null): void {
    this.activeOption = activeOption
  }

  @Provide() getActiveOption (): Option| null {
    return this.activeOption
  }

  @Emit() input (value: any): void {}

  onShow () {
    if (!this.disabled) this.dropdownVisible = true
  }

  onHide () {
    this.dropdownVisible = false
  }

  onSearch (searchValue: string) {
    let noData = true
    this.optionComps.forEach((v: any) => {
      if (!searchValue) {
        v.visible = true
        noData = false
      } else {
        if (v.text && (v.text as string).indexOf(searchValue) !== -1) {
          v.visible = true
          noData = false
        } else v.visible = false
      }
    })
    this.noData = noData
  }

  changeActiveOption (offset: number) {
    let visibleOpts = this.optionComps.filter(v => v.visible)
    let len = visibleOpts.length
    if (len < 1) return
    let idx = !this.activeOption ? -1 : visibleOpts.findIndex(v => v === this.activeOption)
    let newIdx = idx + offset
    if (newIdx < 0) this.activeOption = visibleOpts[len - 1]
    else if (newIdx >= len) this.activeOption = visibleOpts[0]
    else this.activeOption = visibleOpts[newIdx]
  }

  selectOption () {
    // TODO consider merge with Option's change value
    if (!this.activeOption) return
    if (this.multiple) {
      let label = this.activeOption.label
      let newValue: any[] = []
      let value = this.value
      if (value !== null || value !== undefined) newValue = newValue.concat(value)
      let idx = newValue.findIndex(v => v === label)
      if (idx !== -1) newValue.splice(idx, 1)
      else newValue.push(label)
      this.input(newValue)
    } else {
      this.input(this.activeOption.label)
      this.close()
    }
  }
}
</script>
