export default function calculateDaysToRelease(releaseDate: number) {
  if (!releaseDate) return { isReleased: false, daysToRelease: null };

  const today = new Date();
  const release = new Date(releaseDate * 1000);
  const days = Math.ceil((release.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    return { isReleased: true };
  }

  return { isReleased: false, daysToRelease: days };
}