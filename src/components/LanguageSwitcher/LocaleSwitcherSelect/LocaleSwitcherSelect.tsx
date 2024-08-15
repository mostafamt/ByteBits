"use client";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";

import styles from "./locale-switcher-select.module.scss";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale: "en" | "ar" | any = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <select
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
      className={styles.select}
    >
      {children}
    </select>
  );
}
