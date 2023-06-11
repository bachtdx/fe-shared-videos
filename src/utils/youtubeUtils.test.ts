import isYouTubeLink from './youtubeUtils';

describe('isYouTubeLink', () => {
  it('should return true for valid YouTube links', () => {
    expect(isYouTubeLink('https://www.youtube.com/watch?v=ABC123')).toBe(true);
    expect(isYouTubeLink('https://youtu.be/embed/ABC123')).toBe(true);
    expect(isYouTubeLink('https://youtu.be/ABC123')).toBe(true);
  });

  it('should return false for invalid YouTube links', () => {
    expect(isYouTubeLink('https://www.google.com')).toBe(false);
    expect(isYouTubeLink('https://www.youtube.com')).toBe(false);
    expect(isYouTubeLink('https://youtu.be/')).toBe(false);
    expect(isYouTubeLink('https://www.youtube.com/watch')).toBe(false);
  });
});
