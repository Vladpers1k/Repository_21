import React from 'react'
import { Layout, Typography } from 'antd'

const { Header: AntHeader } = Layout
const { Title } = Typography

const Header = () => (
  <AntHeader style={{ backgroundColor: '#001529', padding: '0 20px' }}>
    <Title level={3} style={{ color: '#fff', margin: 0 }}>
      React App
    </Title>
  </AntHeader>
)

export default Header
