type Props = {
  name: string;
  age: number;
  phone: string;
};

/**
 * 分割代入を使ってシンプルにしましょう。
 * @returns
 */
export default function Page(props: Props) {
  return (
    <>
      <p>名前: {props.name}</p>
      <p>年齢: {props.age}</p>
      <p>電話番号: {props.phone}</p>
    </>
  );
}
