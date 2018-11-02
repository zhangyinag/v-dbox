<script lang="ts">
import {Component, Vue, Prop, Provide, Inject} from 'vue-property-decorator'
import AnchoredHeading from './AnchoredHeading'

@Component({
  components: {},
  })
export default class ComponentCatalog extends Vue {
  @Prop({type: Array, default: []}) anchors: AnchoredHeading

  render (h) {
    let anchors = this.anchors
    const placeholder = '>>>>>>>>>>>>>>>'
    if (!anchors || anchors.length < 1) return null
    const list = []
    anchors.forEach(anchor => {
      let item = h('li', null, [placeholder.substr(0, anchor.level), h('a', {on: {click: () => { this.link(anchor.id) }}}, [anchor.$slots.default])])
      list.push(item)
    })
    let current = h('ul', {'class': this.$style.box}, list)
    return current
  }

  link (id: string) {
    const $target = document.getElementById(id)
    if ($target) $target.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
  }
}
</script>

<style lang="scss" module>
    .box{
        position: sticky;
        top: 0;
    }
</style>
