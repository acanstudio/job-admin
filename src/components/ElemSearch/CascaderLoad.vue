<template>
  <span class="filter-item">
    <el-cascader
      ref="cascaderelem"
      :options="options"
      :props="props"
      @change="handleFormChange"
      v-model="selectValue"
      :show-all-levels="false"
      clearable></el-cascader>
  </span>
</template>

<script>
import {form} from '@/applications/mixins/form';
import {fetchData} from '@/applications/mixins/fetchData';

export default {
  mixins: [fetchData, form],
  data() {
    let _self = this;
    return {
      props: {
        lazy: true,
        checkStrictly: true,
        lazyLoad (node, resolve) {
          const { level } = node;

          setTimeout(() => {
            let model = _self.getModel(_self.elem.loadApp, _self.elem.loadResource);;
            model.$fetch({query: {parent_id: node.value, action: 'list', 'point_scene': 'keyvalueExt'}}).then(response => {
              let keyField = response.key;
              let nameField = response.name;
              let extField = response.extField;
              let extField2 = response.extField2;
              let elems = response.data;
              let nodes = [];
              elems.forEach(info => {
                nodes.push({
                  value: info[keyField],
                  label: info[nameField],
                  extField: info[extField],
                  extField2: info[extField2],
                  leaf: false,
                });
              });
              resolve(nodes);
            })
          }, 1000);
        }
      },
      //currentValue: this.listQuery[this.field],

      selectValue: this.listQuery[this.field],
      selectNode: [],
      lastNode: {},
    }
  },
  computed: {
    input() {
      this.selectNode = this.$refs["cascaderelem"].getCheckedNodes();
      let vLength = this.selectValue.length;
      this.lastNode = vLength ? this.selectNode[vLength - 1] : {};
      return vLength ? this.selectValue[vLength - 1] : 0;
    },
    options() {
      let infos = this.elem.infos;
      if (!infos) {
        return [{value: 0, label: 'sss', leaf: false}];
      }
      let options = [];
      infos.data.forEach(info => {
        options.push({
          value: info[infos.key],
          label: info[infos.name],
          extField: info[infos.extField],
          extField2: info[infos.extField2],
          leaf: false,
        });
      });
      return options;
    }
  },
  methods: {
    dealFormChange(value) {
      let datas = {
        value: value,
        selectNode: this.selectNode,
        lastNode: this.lastNode,
      }
      this.$emit('dealFormChange', this.formName, this.field, datas);
    }
  }
};
</script>
