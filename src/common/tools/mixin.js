import { debounce } from "common/tools/tools.js";
import BackTop from "components/content/backTop/BackTop";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll";

export const mixin = {
    data() {
        return {
            itemimgload: null,
            refreshFun: null
        }
    },
    mounted() {
        this.refreshFun = debounce(this.$refs.scroll.refreshload, 300);
        this.itemimgload = () => {
           this.refreshFun();
        }
        this.$bus.$on("imgload", this.itemimgload);
    }
}

export const backTopMixin = {
    components: {
        BackTop,
        GoodsList,
        Scroll
    },
    data () {
        return {
            isShow:false
        }
    },
    methods: {
        backClick(){
            this.$refs.scroll.scrollBack(0, 0, 300);
          }
    }
}