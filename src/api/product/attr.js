import request from '@/utils/request'

// 商品管理 -> 平台属性

// 获取平台一级分类数据
export const reqCategory1List = () => request({ url: '/admin/product/getCategory1', method: 'get' })

// 获取平台二级分类数据
export const reqCategory2List = (Category1Id) => request({ url: `/admin/product/getCategory2/${Category1Id}`, method: 'get' })

// 获取平台三级分类数据
export const reqCategory3List = (Category2Id) => request({ url: `/admin/product/getCategory3/${Category2Id}`, method: 'get' })

// 根据三个级别ID获取该分类下属性
export const reqAttrInfoList = (ids) => request({ url: `/admin/product/attrInfoList/${ids.category1Id}/${ids.category2Id}/${ids.category3Id}`, method: 'get' })

// 根据三个级别ID增加或修改该分类下属性
export const reqAddOrUpdateAttr = (data) => request({ url: '/admin/product/saveAttrInfo', data, method: 'post' })

// 根据三个级别ID删除该分类下属性
export const reqDeleteAttr = (attrId) => request({ url: `/admin/product/deleteAttr/${attrId}`, method: 'delete' })