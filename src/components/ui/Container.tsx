import { ReactNode } from "react";

type TContainersProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainersProps) => {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
