import { MutableRefObject, ReactNode } from "react";

interface IMainContainer {
  title?: string;
  children: ReactNode;
  productsSectionRef?: MutableRefObject<HTMLDivElement>;
}

const MainContainer: React.FC<IMainContainer> = ({
  title,
  children,
  productsSectionRef,
}) => {
  return (
    <div
      ref={productsSectionRef || null}
      className=" w-full px-[40px] lg-1024:px-[120px] min-h-[100vh] flex items-center flex-col gap-10"
    >
      {title && (
        <div>
          <p className=" capitalize text-3xl">{title}</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default MainContainer;
