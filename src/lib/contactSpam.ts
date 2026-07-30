const SPAM_KEYWORDS = [
  'buy',
  'cheap',
  'click',
  'credit',
  'crypto',
  'earn',
  'free',
  'investment',
  'loan',
  'money',
  'offer',
  'seo',
  'spam',
  'viagra',
  'wealth'
];

const RANDOM_CHAR_PATTERN = /[^a-zA-Z]{2,}|^[^a-zA-Z]+$/;

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function isLikelySpam(input: {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  message?: string;
  altcha?: string;
  honeyPot?: string;
}) {
  if (input.honeyPot && input.honeyPot.trim().length > 0) {
    return true;
  }

  const text = [
    input.firstName,
    input.lastName,
    input.companyName,
    input.email,
    input.message
  ]
    .filter(Boolean)
    .join(' ');

  const normalized = normalizeText(text);

  if (!normalized) {
    return true;
  }

  const words = normalized.split(/\s+/).filter(Boolean);
  const meaningfulWords = words.filter((word) => word.length >= 3);

  if (meaningfulWords.length < 3) {
    return true;
  }

  const hasSpamKeyword = meaningfulWords.some((word) =>
    SPAM_KEYWORDS.includes(word)
  );

  if (hasSpamKeyword) {
    return true;
  }

  const hasGibberishPattern = meaningfulWords.some((word) => {
    const letters = word.replace(/[^a-z]/g, '');
    return letters.length >= 6 && !/[aeiou]/.test(letters);
  });

  if (hasGibberishPattern) {
    return true;
  }

  const hasLongLowVowelWord = words.some((word) => {
    const letters = word.replace(/[^a-z]/g, '');
    const vowelCount = letters.match(/[aeiou]/gi)?.length ?? 0;
    return (
      letters.length >= 12 &&
      vowelCount <= Math.ceil(letters.length * 0.3) &&
      !RANDOM_CHAR_PATTERN.test(word)
    );
  });

  if (hasLongLowVowelWord) {
    return true;
  }

  const hasTooMuchRandomness = words.some((word) => {
    const letters = word.replace(/[^a-z]/g, '');
    return letters.length >= 8 && RANDOM_CHAR_PATTERN.test(word);
  });

  return hasTooMuchRandomness;
}
