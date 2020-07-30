import {request} from './request'

export function getHomeMultiData(){
    return request({
        url:"/home/multidata"
        // url:"/Bill/OrderInfo",
        // params: {
        //     orderid:123,
        //     plusid:123,
        //     token:123
		// }
    });
}

export function getGooodsDetail(type,page){
    return request({
        url:"/home/data",
        params: {
            type,
            page
		}
    }); 
}