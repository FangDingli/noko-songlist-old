import Base from '@/lib/ts/Base'
import config from '@/config'

const { api: { dev, prod } } = config
const appBaseUrl = import.meta.env.MODE === "production" ? prod : dev