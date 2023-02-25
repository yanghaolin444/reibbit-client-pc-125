import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
    namespaced: true,
    state() {
        return {
            list: topCategory.map(item => ({ name : item }))
        }
    },
    mutations: {
        setList (state, headCategory) {
          state.list = headCategory
        },
        show (state, item) {
            const category = state.list.find(category => category.id === item.id)
            category.open = true
          },
          // 修改当前一级分类下的open数据为false
          hide (state, item) {
            const category = state.list.find(category => category.id === item.id)
            category.open = false
          }
      },
      // 需要向后台加载数据，所以需要actions函数获取数据
      actions: {
        async getList ({commit}) {
          const { result } = await findAllCategory()
          // 获取数据成功，提交mutations进行数据修改
           result.forEach(item => {
              item.open = false
            })
          commit('setList', result)
        }
      }
}
