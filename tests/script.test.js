import { jest } from '@jest/globals';

jest.unstable_mockModule('../src/index.js', () => ({
  runExample: jest.fn(() => 'mocked output'),
}));

const { runExample } = await import('../src/index.js');

describe('script.js', () => {
  it('should call runExample and log the output', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await import('../src/script.js');

    expect(runExample).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Boot:', 'mocked output');

    logSpy.mockRestore();
  });
});
