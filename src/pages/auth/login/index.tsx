import { LoginForm } from '@ant-design/pro-components'
import { SelectLang } from '@umijs/max'

const ActionIcons = () => {
  const iconCls = 'hover:opacity-75 cursor-pointer'
  return (
    <Space>
      <Icon fontSize={30} icon="logos:facebook" className={iconCls} />
      <Icon fontSize={30} icon="logos:google-icon" className={iconCls} />
      <Icon fontSize={29} icon="skill-icons:instagram" className={iconCls} />
    </Space>
  )
}

const Lang = () => {
  return (
    <div data-lang className="flex justify-end">
      {SelectLang && <SelectLang />}
    </div>
  )
}

const Login = () => {
  const { isMdDown } = useMediaQuery()
  const { handleLogin, loadingLogin } = useModel('auth.login.model')
  const form = (
    <>
      <Lang />
      <LoginForm
        loading={loadingLogin}
        onFinish={handleLogin}
        logo={<img alt="logo" src="https://preview.pro.ant.design/logo.svg" />}
        title="Ant Design"
        subTitle={
          'Ant Design is the most influential web design specification in Xihu district'
        }
        initialValues={{
          username: 'admin',
          password: 'admin',
        }}
        actions={[
          <Space align="center" key="actions">
            <GText key="text">Login with :</GText>
            <ActionIcons />
          </Space>,
        ]}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          placeholder={'Enter your username'}
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          placeholder={'Enter your password'}
          rules={[
            {
              required: true,
            },
          ]}
        />
      </LoginForm>
    </>
  )
  return (
    <PageContainer
      style={{
        backgroundImage:
          "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
        backgroundSize: '100% 100%',
      }}
    >
      <div
        className="justify-center flex h-[70vh] items-center"
        style={{
          backgroundImage:
            "url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')",
        }}
      >
        {isMdDown ? (
          <div>{form}</div>
        ) : (
          <ProCard style={{ maxWidth: 480 }} bodyStyle={{ padding: 4 }}>
            {form}
          </ProCard>
        )}
      </div>
    </PageContainer>
  )
}

export default Login
