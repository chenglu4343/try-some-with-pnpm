import { useRouter } from 'vue-router'

export function useGoto() {
  const router = useRouter()

  const gotoHome = () => {
    router.push('/home')
  }

  return {
    gotoHome,
  }
}
