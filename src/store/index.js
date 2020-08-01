import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
// 引入本地存储
import {
  getLocalStore,
  setLocalStore,
  removeLocalStore
} from '@/config/global'

Vue.use(Vuex)

const state = {
  cartList: []
}

const mutations = {
  ADDCOUNT(state, payload) {
    payload.count = payload.count;
  },
  ADDTOCART(state, payload) {
    state.cartList.push(payload);
  },
  CHANGECHECKED(state, payload) {
    payload.checked = !payload.checked
  },
  CHECKBUTTON(state, payload) {
    if (payload) {
      state.cartList.forEach(item => item.checked = false)
    } else {
      state.cartList.forEach(item => item.checked = true)
    }
  },
  DELETECARTlIST(state, payload) {
    let nowiid = payload.iid;
    const size = state.cartList.length;
    if (size !== 0) {
      for (let i = 0; i < size; i++) {
        if (nowiid === state.cartList[i].iid) {
          state.cartList.splice(i, 1);
        }
      }
      setLocalStore('state', state);
    }
  },
  INIT_SHOPCART(state) {
    // 先存本地取购物车数据
    // const initShopCart = getLocalStore('cartList');
    const initShopCart = getLocalStore('state');
    if (initShopCart) {
      //购物车有数据那么就把它通过对象的方式赋值给store
      state.cartList = JSON.parse(initShopCart).cartList;
    }
  }
}

const actions = {
  ADDCART(context, payload) {
    return new Promise((resolve, reject) => {
      let productload = context.state.cartList.find(item => item.iid === payload.iid)

      if (productload) {
        let orginCount = productload.count;
        let nowCount = payload.count;
        let count = orginCount + nowCount;
        productload.count = count;
        context.commit('ADDCOUNT', productload)
      } else {
        context.commit('ADDTOCART', payload)
      }
      //setLocalStore('cartList', state.shopCart );
      setLocalStore('state', state);
      resolve("成功加入购物车")
    });
  },
  CHANGECHECKED(context, payload) {
    context.commit('CHANGECHECKED', payload)
  },
  CHECKBUTTON(context, payload) {
    context.commit('CHECKBUTTON', payload)
  },
  DELETECARTlIST(context, payload) {
    context.commit('DELETECARTlIST', payload);
  },
  INIT_SHOPCART(context) {
    context.commit('INIT_SHOPCART');
  }
}

const modules = {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
