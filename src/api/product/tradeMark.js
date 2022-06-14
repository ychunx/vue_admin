import request from '@/utils/request'

// 商品管理 -> 品牌管理

// 获取品牌数据
export const reqTradeMarkList = (page, limit) => request({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get' })

// 增加或修改品牌信息
export const reqAddOrUpdareTradeMark = (tradeMark) => {
    if (tradeMark.id) {
        return request({ url: '/admin/product/baseTrademark/update', data: tradeMark, method: 'put' })
    } else {
        return request({ url: '/admin/product/baseTrademark/save', data: tradeMark, method: 'post' })
    }
}

// 根据品牌ID删除品牌
export const reqDeleteTradeMark = (id) => request({ url: `/admin/product/baseTrademark/remove/${id}`, method: 'delete' })