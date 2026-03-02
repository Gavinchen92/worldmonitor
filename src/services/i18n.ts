import i18next from 'i18next';
import zhTranslation from '../locales/zh.json';

const FIXED_LANGUAGE = 'zh' as const;
const FIXED_LOCALE = 'zh-CN' as const;
type TranslationDictionary = Record<string, unknown>;

function applyDocumentLanguage(): void {
  document.documentElement.setAttribute('lang', FIXED_LOCALE);
  document.documentElement.removeAttribute('dir');
}

// Initialize i18n
export async function initI18n(): Promise<void> {
  if (i18next.isInitialized) {
    if (i18next.language !== FIXED_LANGUAGE) {
      await i18next.changeLanguage(FIXED_LANGUAGE);
    }
    applyDocumentLanguage();
    return;
  }

  await i18next
    .init({
      resources: {
        zh: { translation: zhTranslation as TranslationDictionary },
      },
      lng: FIXED_LANGUAGE,
      supportedLngs: [FIXED_LANGUAGE],
      nonExplicitSupportedLngs: false,
      fallbackLng: FIXED_LANGUAGE,
      debug: import.meta.env.DEV,
      interpolation: {
        escapeValue: false, // not needed for these simple strings
      },
    });

  applyDocumentLanguage();
}

// Helper to translate
export function t(key: string, options?: Record<string, unknown>): string {
  return i18next.t(key, options);
}

// Language switching is intentionally disabled in single-language mode.
export async function changeLanguage(lng: string): Promise<void> {
  if (lng !== FIXED_LANGUAGE) {
    console.warn(`[i18n] Ignoring language switch to "${lng}" (fixed to ${FIXED_LANGUAGE})`);
  }
  if (i18next.language !== FIXED_LANGUAGE) {
    await i18next.changeLanguage(FIXED_LANGUAGE);
  }
  applyDocumentLanguage();
}

export function getCurrentLanguage(): string {
  return FIXED_LANGUAGE;
}

export function isRTL(): boolean {
  return false;
}

export function getLocale(): string {
  return FIXED_LOCALE;
}

export const LANGUAGES = [
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];
