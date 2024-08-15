import React from "react";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/LanguageSwitcher/LocaleSwitcherSelect/LocaleSwitcherSelect";
import { locales } from "@/config";
import styles from "./languageSwitcher.module.scss";

type Props = {};

const LanguageSwitcher = (props: Props) => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map(cur => (
        <option key={cur} value={cur} className={styles.option}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LanguageSwitcher;
