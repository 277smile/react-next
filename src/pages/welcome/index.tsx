import { __useFetcher } from 'umi';

const Index = () => {
  // demo auto import config/webpack/auto-import

  // antd
  const modal = () => {
    AModal.info({ title: 'hello1' });
    _notification.info({ message: 'ant notification' });
  };

  // react
  useEffect(() => {
    console.log('sila');
  }, []);

  // ahook
  _useCreation(() => {
    console.log('ahook');
    return {};
  }, []);

  // other folder
  console.log('utils', _uuid());

  // lodash
  console.log('utils', __isArray([]));
  // pro component
  console.log('a', _isBrowser());

  return (
    // antd component
    <ASpace>
      <PProCard bordered title='ProCom'>
        <h1 className="text-xl text-green-600">Welcome to Umijs Admin</h1>
      </PProCard>
      <IconTeenyicons360Solid onClick={modal} />
    </ASpace>
  );
};

export default Index;
