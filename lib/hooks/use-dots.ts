import { useMemo } from 'react';
import { SeededRandom } from '@/lib/utils/seeded-random';

export function useDots(count = 50, seed = 42) {
  return useMemo(() => {
    const random = new SeededRandom(seed);
    return Array.from({ length: count }, () => ({
      left: `${random.range(0, 100)}%`,
      top: `${random.range(0, 100)}%`,
      delay: random.range(0, 2),
      opacity: random.range(0.2, 0.4),
      scale: random.range(0.9, 1.1)
    }));
  }, [count, seed]);
}