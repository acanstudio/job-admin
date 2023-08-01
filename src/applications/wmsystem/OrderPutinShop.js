import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/wmsystem/order-putin-shops'

export default class OrderPutinShop extends BaseModel {
  static entity = 'orderPutinShops'

  static methodConf = conf
}
