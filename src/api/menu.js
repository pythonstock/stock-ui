import request from '@/utils/request'

// 同步获得菜单相关数据。

export  function fetchMenuList(query) {
  return request({
    url: 'http://localhost:9999/stock/menu_list',
    method: 'get',
    params: query
  })
}

