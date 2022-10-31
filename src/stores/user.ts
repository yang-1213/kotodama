import { acceptHMRUpdate, defineStore } from 'pinia'
import { namespace } from '~/utils'

export const useUserStore = defineStore('user', () => {
  /**
   * waline server url
   */
  const serverURL = useStorage(`${namespace}:serverURL`, '')
  const token = useStorage(`${namespace}:token`, '')
  const url = useStorage(`${namespace}:url`, '')
  const email = useStorage(`${namespace}:email`, '')

  return {
    token,

    serverURL,
    /**
     * user website url
     */
    url,

    email,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
