import { AppState } from '../AppState'
// import router from '../router'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data
  }

  async getActive(id) {
    const res = await api.get('api/posts/' + id)
    AppState.activeProfile = res.data
    // console.log(res.data)
  }

  async getMyProjects() {
    const res = await api.get(`api/posts?creatorId=${AppState.account.id}`)
    AppState.myProjects = res.data
  }

  async getByProfileId(id) {
    const res = await api.get(`api/posts?creatorId=${id}`)
    AppState.activeProjects = res.data
  }

  // async create(data) {
  //   const res = await api.post('api/posts', data)
  //   router.push({ name: 'ProjectDetails', params: { id: res.data.id } })
  //   // this.getAll()
  // }

  // async addPhoto(projectId, photo) {
  //   await api.post(`api/projects/${projectId}/photos`, photo)
  //   this.getActive(projectId)
  // }
}

export const postsService = new PostsService()
