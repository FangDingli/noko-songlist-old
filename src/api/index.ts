import Base from '@/lib/ts/Base'
import config from '@/config'

const { api: { dev, prod } } = config
const appBaseUrl = import.meta.env.MODE === "production" ? prod : dev

const baseRequest = Base.NetBase.create({
  baseUrl: appBaseUrl,
})

interface SongListParams {
  param?: ""
  randomFlag: false
  type: "none"
}

export const getList = (url: string, params: any) => baseRequest.get(url, params)

export const commonPost = (url: string, params: any) => baseRequest.post(url, params)

export const getSongList = (url: string, params: SongListParams) => Base.NetBase.spost(appBaseUrl + url, params, {
  credentials: "omit",
  headers: {
    "Content-Type": "application/json"
  }
})