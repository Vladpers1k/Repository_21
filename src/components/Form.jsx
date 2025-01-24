import React from 'react'
import { Form, Input, Button } from 'antd'

const MyForm = () => {
  const onFinish = (values) => {
    console.log('Submitted:', values)
  }

  return (
    <Form name="basic" layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: '0 auto' }}>
      <Form.Item label="Ім'я" name="name" rules={[{ required: true, message: 'Будь ласка, введіть своє ім’я!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Електронна пошта"
        name="email"
        rules={[{ required: true, message: 'Будь ласка, введіть свою пошту!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Надіслати
        </Button>
      </Form.Item>
    </Form>
  )
}

export default MyForm
