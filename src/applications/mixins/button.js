import {globalSettings} from '@/utils/base'

export const button = {
  name: "button",
  components: {
  },
  data() {
    return {
      //envType: globalSettings.envType,
    }
  },
  props: {
    elem: {type: Object, default() {}},
    listQuery: {type: Object, default() {}},
    field: {type: String, default: ''},
    value: {type: String, default: ''},
    index: null,
    model: {type: Function},  
    row: {type: Object, default() {}},
  },
  computed:{
  },
  methods: {
    dealAction(datas) {
      //this.$refs.listForm.handleCreate();
      this.$emit('dealAction', {actionType: this.actionType, datas: datas, elem: this.elem});
    },
  },
}
