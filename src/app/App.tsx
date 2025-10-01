import "./styles/index.scss";
import { useTheme } from "../app/providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

export const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          asdasd adssada asdasdas asdasd asdasd adssada asdasdas asdasd asdasd
          adssada asdasdas asdasd asdasd adssada asdasdas asdasd asdasd
          adssasdas asdasd asdasd adssada asdasdas asdasd asdasd adssada
          asdasdas asdasd s
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
