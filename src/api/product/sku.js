import request from '@/utils/request'

// 商品管理 -> sku管理

// 根据当前页码和项数获取sku列表
export const reqSkuList = (page, limit) => request({ url: `/admin/product/list/${page}/${limit}`, method: 'get' })

// 上架sku
export const reqSale = (skuId) => request({ url: `/admin/product/onSale/${skuId}`, method: 'get' })

// 下架sku
export const reqSoldOut = (skuId) => request({ url: `/admin/product/cancelSale/${skuId}`, method: 'get' })

// 获取某个sku信息
export const reqSkuInfo = (skuId) => request({ url: `/admin/product/getSkuById/${skuId}`, method: 'get' })

// 删除sku
export const reqDeleteSku = (skuId) => request({ url: `/admin/product/deleteSku/${skuId}`, method: 'delete' })