import request from '@/utils/request'

export default {
    //查询前两条banner数据
  getListBanner() {
    return request({
      url: '/cmsService/front/banner/getAllBanner',
      method: 'get'
    })
  }
}
