import api from '@/services/api'
import useUserStore from '@/store/user'
import { UserPublicInfo } from '@/types/user.model'

const { setMyProfile } = useUserStore()

const getUserProfile = async () => {
  return await api.get<UserPublicInfo>('users/me').then((response) => {
    debugger;
    setMyProfile(response.data)
    return response
  })
}


export default function useDashboardController() {
  return {
    getUserProfile,
  }
}