import request from '@/utils/request'

export const reqTradeMarkList = (page, limit) => request({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get' })

export const reqAddOrUpdareTradeMark = (tradeMark) => {
    if (tradeMark.id) {
        return request({ url: '/admin/product/baseTrademark/update', data: tradeMark, method: 'put' })
    } else {
        return request({ url: '/admin/product/baseTrademark/save', data: tradeMark, method: 'post' })
    }
}

export const reqDeleteTradeMark = (id) => request({ url: `/admin/product/baseTrademark/remove/${id}`, method: 'delete' })