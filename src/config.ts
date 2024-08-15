import { LocalePrefix } from "next-intl/routing";

// A list of all locales that are supported
export const locales = ["en", "ar"] as const;

export const localePrefix = "as-needed" satisfies LocalePrefix;
