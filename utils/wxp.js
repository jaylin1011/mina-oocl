import { promisifyAll, promisify } from 'miniprogram-api-promise'

// 生成promise版本wx对象wxp
const wxp = {}
promisifyAll(wx, wxp)
export default wxp
