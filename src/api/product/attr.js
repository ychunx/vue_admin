import request from '@/utils/request'

export const reqCategory1List = () => request({ url: '/admin/product/getCategory1', method: 'get' })

export const reqCategory2List = (Category1Id) => request({ url: `/admin/product/getCategory2/${Category1Id}`, method: 'get' })

export const reqCategory3List = (Category2Id) => request({ url: `/admin/product/getCategory3/${Category2Id}`, method: 'get' })

export const reqAttrInfoList = (ids) => request({ url: `/admin/product/attrInfoList/${ids.category1Id}/${ids.category2Id}/${ids.category3Id}`, method: 'get' })

export const reqAddOrUpdateAttr = (data) => request({ url: '/admin/product/saveAttrInfo', data, method: 'post' })

export const reqDeleteAttr = (attrId) => request({ url: `/admin/product/deleteAttr/${attrId}`, method: 'delete' })