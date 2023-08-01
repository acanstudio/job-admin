import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/wmsystem/order-inventory-details'

export default class OrderInventoryDetail extends BaseModel {
  static entity = 'orderInventoryDetails'

  static methodConf = conf
}
