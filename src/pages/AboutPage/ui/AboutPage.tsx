import { getCounterValue } from "entities/Counter/model/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const { t } = useTranslation("about");
  const counterValue = useSelector(getCounterValue);

  return (
    <div>
      <div> {t("О сайте")} </div>
      <h1>{counterValue}</h1>
    </div>
  );
};

export default AboutPage;
