/**
 * コンポーネントの命名規則を守りましょう。
 */
function hoge() {
  return <>hoge</>;
}

export default function Page() {
  return (
    <>
      <hoge />
    </>
  );
}
