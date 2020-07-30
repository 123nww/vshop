import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'

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
    console.log(state.cartList);
    const size = state.cartList.length;
    console.log(size)
    if (size !== 0) {
      for (let i = 0; i < size; i++) {
        if (nowiid === state.cartList[i].iid) {
          console.log(123456);
          state.cartList.splice(i,1);
        }
      }
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
