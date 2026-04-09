import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className = "" }: ILoaderProps) => {
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};
