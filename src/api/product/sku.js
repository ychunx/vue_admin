import request from '@/utils/request'

export const reqSkuList = (page, limit) => request({ url: `/admin/product/list/${page}/${limit}`, method: 'get' })

export const reqSale = (skuId) => request({ url: `/admin/product/onSale/${skuId}`, method: 'get' })

export const reqSoldOut = (skuId) => request({ url: `/admin/product/cancelSale/${skuId}`, method: 'get' })

export const reqSkuInfo = (skuId) => request({ url: `/admin/product/getSkuById/${skuId}`, method: 'get' })

export const reqDeleteSku = (skuId) => request({ url: `/admin/product/deleteSku/${skuId}`, method: 'delete' })