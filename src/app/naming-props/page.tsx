/**
 * propsの命名規則を守りましょう。
 */
type Props = {
  UserName: string;
  phone_number: number;
};

function Component({ UserName, phone_number }: Props) {
  return (
    <>
      <div>{UserName}</div>
      <div>{phone_number}</div>
    </>
  );
}

export default function Page() {
  return (
    <>
      <Component UserName="John" phone_number={1234567890} />
    </>
  );
}
