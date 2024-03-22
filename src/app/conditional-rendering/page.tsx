function Component1() {
  return <>コンポーネント1</>;
}

function Component2() {
  return <>コンポーネント2</>;
}

function Component3() {
  return <>コンポーネント3</>;
}

type Props = {
  condition: string;
};

/**
 * 条件分岐が多い場合はデータの持ち方を工夫しましょう。
 * @returns
 */
export default function Page({ condition }: Props) {
  switch (condition) {
    case 'Admin':
      return <Component1 />;
    case 'User':
      return <Component2 />;
    case 'Guest':
      return <Component3 />;
  }
}
