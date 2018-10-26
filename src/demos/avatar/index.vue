<template>
<div>
   <h3>头像 Avatar</h3>
   <br>
   <br>
   <p>尺寸与形状</p>
   <v-avatar icon="user" size="lg"></v-avatar> &nbsp;
   <v-avatar icon="user"></v-avatar> &nbsp;
   <v-avatar icon="user" size="sm"></v-avatar>

   <br><br>

   <v-avatar icon="user" size="lg" shape="square"></v-avatar> &nbsp;
   <v-avatar icon="user" shape="square"></v-avatar> &nbsp;
   <v-avatar icon="user" size="sm" shape="square"></v-avatar>

   <br>
   <br>
   <p>类型</p>
   <v-avatar icon="user"></v-avatar> &nbsp;
   <v-avatar >U</v-avatar> &nbsp;
   <v-avatar >USER</v-avatar> &nbsp;
   <v-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></v-avatar> &nbsp;
   <v-avatar icon="user" style="background-color: #87d068; color: #f56a00;"></v-avatar> &nbsp;
   <v-avatar style="background-color: #fde3cf; ">U</v-avatar> &nbsp;

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {RemoteParam, RemoteResult, TableColumnFilter, TableColumnSelection} from '../../components/table/src/type'
@Component({
  components: {},
  })
export default class AvatarDemo extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
