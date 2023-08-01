import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/wmsystem/order-shops'

export default class OrderShop extends BaseModel {
  static entity = 'orderShops'

  static methodConf = conf
}
