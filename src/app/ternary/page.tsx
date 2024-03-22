function Component1() {
  return <>コンポーネント1</>;
}

function Component2() {
  return <>コンポーネント2</>;
}

type Props = {
  condition: boolean;
};

/**
 * 条件分岐は可読性を意識しましょう。
 * @returns
 */
export default function Page({ condition }: Props) {
  if (condition) {
    return <Component1 />;
  } else {
    return <Component2 />;
  }
}
