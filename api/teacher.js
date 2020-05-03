import request from '@/utils/request'

export default {
    //分页讲师查询的方法
  getTeacherList(page,limit) {
    return request({
      url: `/eduService/teacher/front/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  //讲师详情的方法
  getTeacherInfo(id) {
    return request({
      url: `/eduService/teacher/front/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  }

}
