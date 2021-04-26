import { AppState } from '../AppState'
// import router from '../router'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data
    console.log(res.data)
  }

  // async getActive(id) {
  //   const res = await api.get(`api/profile/${id}/posts`)
  //   AppState.activeProfile = res.data
  //   console.log(res.data)
  // }

  // async getMyPosts() {
  //   const res = await api.get(`api/posts?creatorId=${AppState.account.id}`)
  //   AppState.myProjects = res.data
  // }

  async getByProfileId(id) {
    // const res = await api.get(`api/profiles/${id}/posts`)
    const res = await api.get(`api/profiles/${id}`)
    AppState.activeProfile = res.data
    console.log(res.data)
  }

  // async create(data) {
  //   const res = await api.post('api/posts', data)
  //   router.push({ name: 'ProjectDetails', params: { id: res.data.id } })
  //   // this.getAll()
  // }

  async getRightside() {
    const res = await api.get('api/ads')
    AppState.RightSidebar = res.data
  }
}

export const postsService = new PostsService()
