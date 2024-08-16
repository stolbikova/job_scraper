export function detectLanguage(text) {
  // Some common Dutch and English words
  const dutchWords = ["de", "het", "een", "hij", "zijn"];
  const englishWords = ["the", "is", "and", "of", "to"];

  let dutchCount = 0;
  let englishCount = 0;

  const words = text.toLowerCase().split(/\s+/);

  words.forEach((word) => {
    if (dutchWords.includes(word)) {
      dutchCount++;
    }
    if (englishWords.includes(word)) {
      englishCount++;
    }
  });

  if (dutchCount > englishCount) {
    return "Dutch";
  } else if (englishCount > dutchCount) {
    return "English";
  } else {
    return "Unknown";
  }
}

export function containsAnyFlag(text, flags) {
  return flags.some((flag) => text.toLowerCase().includes(flag.toLowerCase()));
}
