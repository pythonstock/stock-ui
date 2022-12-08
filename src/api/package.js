import request from '@/utils/request'

export function fetchPackageVersion(query) {
  return request({
    url: 'http://localhost:9999/stock/package_verison',
    method: 'get',
    params: query
  })
}

