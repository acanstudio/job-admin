<template>
  <el-form-item :label="elem.options.name" prop="field">
    <el-select v-model="input" placeholder="请选择" :multiple="multiple" @change="handleFormChange" :disabled="disabled" clearable filterable>
      <el-option
        v-for="(option, optionKey) in elem.infos"
        :key="optionKey"
        :label="option"
        :value="optionKey">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import {form} from '@/applications/mixins/form';

export default {
  mixins: [form],
  data() {
    return {
      multiple: this.elem.multiple ? true : false,
      disabled: false,
      input: this.inputInfos[this.field] ? this.inputInfos[this.field] : null,
    }
  },
  methods: {
    setDisabled(value = true) {
      this.disabled = value;
    },
    setPointValue(value) {
      this.input = value + '';
    },
  }
}
</script>
