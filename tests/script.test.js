// script.test.js
import * as indexModule from '../src/index.js';
import { jest } from '@jest/globals';

describe('script.js', () => {
  it('should call runExample and log the output', () => {
    // mock runExample
    const mockOutput = 'mocked output';
    jest.spyOn(indexModule, 'runExample').mockReturnValue(mockOutput);

    // spy on console.log
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // dynamically import script.js so it runs
    return import('../src/script.js').then(() => {
      expect(indexModule.runExample).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledWith('Boot:', mockOutput);

      // restore
      logSpy.mockRestore();
    });
  });
});
