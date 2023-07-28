import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/infocms/topics'

export default class Topic extends BaseModel {
  static entity = 'topics'
  static keyField = 'code'

  static methodConf = conf
}
