<template>
    <div :class="[b()]">
        <popper trigger="click"
                :enter-active-class="enterActiveClass"
                :leave-active-class="leaveActiveClass"
                :visible-arrow="false"
                :delay-on-mouse-over="200"
                :delay-on-mouse-out="200"
                :disabled="disabled"
                ref="popper"
                :options="options">
            <span class="popper">
                <ul v-show="results && results.length > 0">
                    <li v-for="(ret, i) in results" :key="i">{{ret && ret.value}}</li>
                </ul>
            </span>

            <span slot="reference" :class="[e('reference')]">
                <v-input :disabled="disabled"
                         :value="value"
                         :size="size"
                         :prefixIcon="prefixIcon"
                         :suffixIcon="suffixIcon"
                         @input="onInput"
                         @change="onChange"
                         @focus="onFocus"
                         @blur="onBlur"
                         v-bind="$attrs"></v-input>
            </span>
        </popper>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import VInput from './index.vue'
import BaseComponent from '../../../core/BaseComponent'
import {Popper} from '../../popper/index'
import {debounce} from '../../../utils'

export interface FetchSuggestionsCallback {
  (data: any[]): void
}

export interface FetchSuggestions {
  (qs: string, callback: FetchSuggestionsCallback): void
}

@Component({
  components: {VInput, Popper},
  })
export default class Autocomplete extends BaseComponent {
  @Prop(Boolean) disabled: boolean

  @Prop([String, Number, Boolean]) @Model('input') value: string | number | boolean

  @Prop(String) size: 'sm' | 'lg'

  @Prop(String) prefixIcon: string

  @Prop(String) suffixIcon: string

  @Prop(Boolean) clearable: boolean

  @Prop({type: Number, default: 300}) delay: number

  @Prop() fetchSuggestions: FetchSuggestions

  @Prop({type: [String], default: 'bottom-start'}) placement: 'top'| 'top-start'| 'top-end'|
    'bottom'| 'bottom-start'| 'bottom-end'| 'left'| 'left-start'| 'left-end'| 'right'| 'right-start'| 'right-end'

  bemBlock: string = 'autocomplete'

  results: any[] = []

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

  get delaySearch (): FetchSuggestions {
    return debounce(this.fetchSuggestions, this.delay, this)
  }

  @Emit() change (value: string | number| boolean) {}

  @Emit() input (value: string | number| boolean) {}

  onInput (value: string | number| boolean) {
    this.input(value)
    this.delaySearch(this.value + '', this.cb)
  }

  onChange (value: string | number| boolean) {
    this.change(value)
  }

  onFocus () {
  }

  onBlur () {
  }

  cb (data: any[]): void {
    this.results = data || []
  }
}
</script>
