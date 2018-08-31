import api from '@/services/api'

export default {
  fetchItmes () {
    return api().get('items')
  },
  addNewItem (params) {
    return api().post('items', params)
  }
}
