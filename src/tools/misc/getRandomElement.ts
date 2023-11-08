export default function getRandomElement<T>(array: T[]): T {
  const value: T | undefined = array[Math.floor(Math.random() * array.length)];

  if (value == null) {
    throw new Error('value not found');
  }

  return value;
}
