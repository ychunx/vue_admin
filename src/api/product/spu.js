import request from '@/utils/request'

// 商品管理 -> spu管理

// 获取spu列表
export const reqSpuList = (page, limit, category3Id) => request({ url: `/admin/product/${page}/${limit}`, params: { category3Id }, method: 'get' })

// 获取spu信息
export const reqSpuInfo = (spuId) => request({ url: `/admin/product/getSpuById/${spuId}`, method: 'get' })

// 获取品牌列表
export const reqTradeMarkList = () => request({ url: '/admin/product/baseTrademark/getTrademarkList', method: 'get' })

// 获取平台某spu拥有的图片
export const reqSpuImageList = (spuId) => request({ url: `/admin/product/spuImageList/${spuId}`, method: 'get' })

// 获取所有售卖属性
export const reqBaseSaleAttrList = () => request({ url: '/admin/product/baseSaleAttrList', method: 'get' })

// 增加或修改spu信息
export const reqAddOrUpdateSpu = (data) => {
    if (data.id) {
        return request({ url: '/admin/product/updateSpuInfo', data, method: 'post' })
    } else {
        return request({ url: '/admin/product/saveSpuInfo', data, method: 'post' })
    }
}

// 删除spu
export const reqDeleteSpu = (spuId) => request({ url: `/admin/product/deleteSpu/${spuId}`, method: 'delete' })

// 获取spu已有售卖属性
export const reqSpuSaleAttrList = (spuId) => request({ url: `/admin/product/spuSaleAttrList/${spuId}`, method: 'get' })

// 获取属性值
export const reqAttrInfoList = (ids) => request({ url: `/admin/product/attrInfoList/${ids.category1Id}/${ids.category2Id}/${ids.category3Id}`, method: 'get' })

// 为spu增加sku
export const reqAddSku = (data) => request({ url: '/admin/product/saveSkuInfo', data, method: 'post' })

// 获取spu的sku列表
export const reqSkuList = (spuId) => request({ url: `/admin/product/findBySpuId/${spuId}`, method: 'get' })