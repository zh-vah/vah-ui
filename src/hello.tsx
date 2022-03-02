import React from "react";

// const Hello = (props: { message: string }) => {
//   return <div>{"展示子组件" + props.message}</div>;
// };

interface IHelloProps {
  message: string;
}

const Hello: React.FC<IHelloProps> = (props) => {
  return <div>{"展示子ss组件" + props.message}</div>;
};

export default Hello;
