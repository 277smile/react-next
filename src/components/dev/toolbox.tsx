export default function Toolbox() {
  const iconsValue = 'https://icon-sets.iconify.design'
  const allOption = [
    {
      label: 'Daily Dev',
      value: 'https://app.daily.dev',
    },
    {
      label: 'ProComponents',
      value: 'https://procomponents.ant.design/en-US/components',
    },
    {
      label: 'Next Dev',
      value: 'https://next-dev-team.github.io/next-dev',
    },
    {
      label: 'Icons',
      value: iconsValue,
    },

    {
      label: 'Antd Design',
      value: 'https://ant.design/components/button',
    },

    {
      label: 'Antd design pro',
      value: 'https://pro.ant.design/docs/getting-started/',
    },
    {
      label: 'Tailwindcss',
      value: 'https://tailwindcss.com/docs/customizing-colors',
    },
  ]
  const itemsDropdown = [
    { label: 'Bundle Size', key: 'https://bundlephobia.com' },
  ]

  const state = _useReactive({
    iframeIndex: allOption?.[0]?.value,
    resultIconText: '',
  })

  const { run: onConvertIconsText } = _useDebounceFn(
    (e) => {
      state.resultIconText = e.target.value
      // console.log('Copy Icons', e.target.value)
    },
    { wait: 300 },
  )

  const renderIframeFn = () => {
    _allModal.showDrawer_devTools({
      title: (
        <ASpace size="large">
          <ASegmented
            value={state.iframeIndex}
            options={allOption}
            onChange={(e) => (state.iframeIndex = e?.toString())}
          />
          <ADropdown
            menu={{
              items: itemsDropdown,
              onClick: (e) => {
                state.iframeIndex = e.key
              },
            }}
          >
            <ASpace>
              Tools
              <IconDownOutlined />
            </ASpace>
          </ADropdown>
        </ASpace>
      ),
      width: '80%',
      children: (
        <>
          {state.iframeIndex === iconsValue && (
            <ARow>
              <ACol span={12}>
                <ProFormText
                  label="Copy Icons"
                  placeholder="Basic usage"
                  fieldProps={{
                    onChange: onConvertIconsText,
                  }}
                />
                {state.resultIconText && (
                  <>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.component(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.bare(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.barePascal(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.componentKebab(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.dash(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.iconify(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.pascal(state.resultIconText)}
                    </ATypography.Text>
                    <ATypography.Text
                      copyable
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      {_stringCase.unocss(state.resultIconText)}
                    </ATypography.Text>
                  </>
                )}
              </ACol>
            </ARow>
          )}
          <iframe
            className="w-full  h-[calc(100vh-100px)]"
            src={state.iframeIndex}
          />
        </>
      ),
      extra: (
        <ASpace>
          <AButton
            type="link"
            target="_blank"
            onClick={() => {
              window.open('https://github.com/next-dev-team')
            }}
          >
            <ASpace>
              <IconGithubFilled />
              Next Dev
            </ASpace>
          </AButton>
          <AButton
            type="link"
            target="_blank"
            onClick={() => {
              window.open('https://react-admin-pro.netlify.app')
            }}
          >
            <ASpace>
              <IconGithubFilled />
              Preview Site
            </ASpace>
          </AButton>
        </ASpace>
      ),
    })
  }

  _useUpdateEffect(() => {
    renderIframeFn()
  }, [state.iframeIndex, state.resultIconText])

  return (
    <a
      className="absolute bottom-8 right-8 inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
      onClick={renderIframeFn}
    >
      <span className="block px-4 py-2.5 text-sm font-medium bg-white rounded-full hover:bg-transparent">
        <IconEtTools2 className="relative text-base top-1 hover:text-white hover:font-bold hover:text-lg " />
      </span>
    </a>
  )
}
