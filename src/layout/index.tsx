import { ChangeEvent, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { setColorPrimary } from '@/store/primary'
import { useAppDispatch } from '@/hooks/hooks'

const { Header, Sider, Content } = Layout

const items: MenuProps['items'] = [
  {
    label: 'home',
    path: '/home',
  },
  {
    label: 'about',
    path: '/about',
  },
].map((nav) => ({
  key: nav.path,
  icon: null,
  label: nav.label,
}))

const BasicLayout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const disptach = useAppDispatch()

  const [collapsed, setCollapsed] = useState(false)
  const [colorPrimary, setColorPrimary1] = useState('#1890ff')

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }
  
  const handleChangeColorPrimary = (event: ChangeEvent<HTMLInputElement>) => {
    setColorPrimary1(event.target.value)
    disptach(setColorPrimary(event.target.value))
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(0, 0, 0, 0.2)',
            zIndex: 200,
          }}
        />
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Button type="text" onClick={() => setCollapsed(!collapsed)} style={{ background: colorPrimary }}>
            collapsed
          </Button>
          <input type="color" value={colorPrimary} onChange={ (e) => handleChangeColorPrimary(e)}/>
        </Header>
        <Content style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
