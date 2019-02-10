import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネント読込
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'
import Product from '@/views/Product.vue'
// Productの子ルート
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'

// プラグインとして登録
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/product',
            component: ProductList
        },
        {
            path: '/product/:id(\\d+)',
            component: Product,
            props: route => ({id: Number(route.params.id)}),
            children: [
                // 商品詳細
                {
                    name: 'product-home',
                    path: '',
                    component: ProductHome
                },
                // 商品レビュー一覧
                {
                    name: 'product-review',
                    path: 'review',
                    component: ProductReview
                },
                // 商品レビュー詳細
                {
                    name: 'review-detail',
                    path: 'review/:rid',
                    component: ProductReviewDetail
                }
            ]
        }
    ]
})
export default router
