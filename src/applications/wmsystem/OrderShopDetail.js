import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/wmsystem/order-shop-details'

export default class OrderShopDetail extends BaseModel {
  static entity = 'orderShopDetails'

  static methodConf = conf
}
