// tests/script.test.js
import * as indexModule from '../src/index.js';

describe('script.js', () => {
  it('should call runExample and log the output', async () => {
    // mock runExample
    const mockOutput = 'mocked output';
    jest.spyOn(indexModule, 'runExample').mockReturnValue(mockOutput);

    // spy on console.log
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // dynamically import script.js so it executes
    await import('../src/script.js');

    expect(indexModule.runExample).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Boot:', mockOutput);

    // cleanup
    logSpy.mockRestore();
  });
});
