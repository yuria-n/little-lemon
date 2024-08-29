function seededRandom(seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  const s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}

/**
 * @param {Date} date
 * @param {string} type - lunch or dinner
 */
export async function fetchAPI(date, type) {
  const result = [];
  const start = type === "lunch" ? 11 : 17;
  const end = type === "lunch" ? 14 : 22;
  const random = seededRandom(date.getDate());

  for (let i = start; i <= end; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

/**
 * @param {Object} formData
 */
export async function submitAPI(formData) {
  return true;
}
