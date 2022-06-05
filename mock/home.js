const data = require('./date')
module.exports = [
    {
        url: '/home/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: data.default
            }
        }
    }
]