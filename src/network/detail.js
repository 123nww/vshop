import { request } from './request';

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

//请求推荐recommend
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}


export class GoodsInfo {

    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.oldPrice = itemInfo.oldPrice;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;

    }
}

export class Shop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.cSells = shopInfo.cSells;
        this.cGoods = shopInfo.cGoods;
    }
}


export class Params {
    constructor(info, rule) {
        this.images = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}

// export class skuDetail{
//     constructor(sku,goods_id,quota,quota_used,goods_info,initialSku){
//         this.sku = new sku();
//         this.goods_id = null;
//     }
// }

// export class sku {


//     constructor(tree, list, price, stock_num, none_sku, hide_stock) {

//     }
// }


export class ColorV {
    constructor(item) {
        this.id = item.styleId;
        this.name = item.name;
        //this.imgUrl = "";
    }
}

export class SizeV {
    constructor(item) {
        this.id = item.sizeId;
        this.name = item.name;
    }
}

export class TreeColorV {
    constructor(goodsColor) {
        this.k = '颜色';
        this.k_id = '1';
        this.v = goodsColor;
        this.k_s = 's1';
        this.count = goodsColor.length;
    }
}

export class TreeSizeV {
    constructor(goodsSize) {
        this.k = '尺寸';
        this.k_id = '2';
        this.v = goodsSize;
        this.k_s = 's2';
        this.count = goodsSize.length;
    }
}

export class ListSku{
    constructor(item){
        this.id = item.xdSkuId;
        this.price = item.nowprice;
        this.s1 = item.styleId;
        this.s2 = item.sizeId;
        this.stock_num = item.stock;
    }
}

export class Sku{
    constructor(tree,list,price,stock_num){
        this.tree = tree;
        this.list = list;
        this.price = price;
        this.stock_num = stock_num;
        this.none_sku =false;
        this.hide_stock = false;

    }
}

export class GoodsPicture{
    constructor(imgurl){
        this.picture = imgurl;
    }
}

export class GoodsImgInfo{
    constructor(goodsimg){
        this.goods = goodsimg;
    }
}

export class Skued{
    constructor(skued){
        this.sku = skued;
    }
}