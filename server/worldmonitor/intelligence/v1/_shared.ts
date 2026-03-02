/**
 * Shared constants, types, and helpers used by multiple intelligence RPCs.
 */

// ========================================================================
// Constants
// ========================================================================

export const UPSTREAM_TIMEOUT_MS = 30_000;
export const DEEPSEEK_API_URL = process.env.DEEPSEEK_API_URL || 'https://api.deepseek.com/chat/completions';
export const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat';

// ========================================================================
// Tier-1 country definitions (used by risk-scores + country-intel-brief)
// ========================================================================

export const TIER1_COUNTRIES: Record<string, string> = {
  US: 'United States', RU: 'Russia', CN: 'China', UA: 'Ukraine', IR: 'Iran',
  IL: 'Israel', TW: 'Taiwan', KP: 'North Korea', SA: 'Saudi Arabia', TR: 'Turkey',
  PL: 'Poland', DE: 'Germany', FR: 'France', GB: 'United Kingdom', IN: 'India',
  PK: 'Pakistan', SY: 'Syria', YE: 'Yemen', MM: 'Myanmar', VE: 'Venezuela',
};

// ========================================================================
// Helpers
// ========================================================================

export { hashString } from '../../../_shared/hash';
