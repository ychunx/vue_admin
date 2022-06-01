import request from '@/utils/request'

export const reqSpuList = (page, limit, category3Id) => request({ url: `/admin/product/${page}/${limit}`, params: { category3Id }, method: 'get' })

export const reqSpuInfo = (spuId) => request({ url: `/admin/product/getSpuById/${spuId}`, method: 'get' })

export const reqTradeMarkList = () => request({ url: '/admin/product/baseTrademark/getTrademarkList', method: 'get' })

export const reqSpuImageList = (spuId) => request({ url: `/admin/product/spuImageList/${spuId}`, method: 'get' })

export const reqBaseSaleAttrList = () => request({ url: '/admin/product/baseSaleAttrList', method: 'get' })

export const reqAddOrUpdateSpu = (data) => {
    if (data.id) {
        return request({ url: '/admin/product/updateSpuInfo', data, method: 'post' })
    } else {
        return request({ url: '/admin/product/saveSpuInfo', data, method: 'post' })
    }
}

export const reqDeleteSpu = (spuId) => request({ url: `/admin/product/deleteSpu/${spuId}`, method: 'delete' })

export const reqSpuSaleAttrList = (spuId) => request({ url: `/admin/product/spuSaleAttrList/${spuId}`, method: 'get' })

export const reqAttrInfoList = (ids) => request({ url: `/admin/product/attrInfoList/${ids.category1Id}/${ids.category2Id}/${ids.category3Id}`, method: 'get' })

export const reqAddSku = (data) => request({ url: '/admin/product/saveSkuInfo', data, method: 'post' })

export const reqSkuList = (spuId) => request({ url: `/admin/product/findBySpuId/${spuId}`, method: 'get' })