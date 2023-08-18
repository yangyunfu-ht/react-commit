import { RouterProvider } from 'react-router-dom'
import router from '@/router'


import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'
import { useAppSelector } from './hooks/hooks'

dayjs.locale('zh-cn')

const App = () => {
  const colorPrimary = useAppSelector(state => state.primaryer.value)
  return (
    <ConfigProvider locale={zhCN} theme={{
      token: {
        colorPrimary: colorPrimary,
      }
    }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App