'use strict';

import { formatDate, formatTime } from './datetime';

describe('Utility datetime', function() {
  describe('formatDate(datetime)', function() {
    it('returns `` if datetime is null', function() {
      var datetime = null;
      expect(formatDate(datetime)).toBe('');
    });

    it('returns `` if datetime is undefined', function() {
      var datetime;
      expect(formatDate(datetime)).toBe('');
    });

    it('returns date in format `DD/MM/YYYY` if datetime is defined', function() {
      var datetime = '2018-01-07T10:00:23.021Z';
      expect(formatDate(datetime)).toBe('07/01/2018');
    });
  });

  describe('formatTime(datetime)', function() {
    it('returns `` if datetime is null', function() {
      var datetime = null;
      expect(formatTime(datetime)).toBe('');
    });

    it('returns `` if datetime is undefined', function() {
      var datetime;
      expect(formatTime(datetime)).toBe('');
    });

    it('returns time in format `HH:MM` if datetime is defined', function() {
      var datetime = '2018-01-25T10:00:23.021Z';
      expect(formatTime(datetime)).toBe('12:00');
    });
  });
});
