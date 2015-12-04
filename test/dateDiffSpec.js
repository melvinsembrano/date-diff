describe('DateDiff', function() {
  describe('#days', function() {
    it('will return 1', function() {
      expect(Date.diff(Date.today(), 1..day().ago()).days()).toBe(1);
    });

    it('will return 5', function() {
      expect(Date.diff(Date.today(), 5..day().ago()).days()).toBe(5);
    });

    it('will return 365', function() {
      expect(Date.diff(Date.today(), 365..day().ago()).days()).toBe(365);
    });
  });

  describe('#hours', function() {
    it('will return 1', function() {
      expect(Date.diff(Date.today(), 1..hour().ago()).hours()).toBe(1);
    });
    it('will return 16', function() {
      expect(Date.diff(Date.today(), 16..hour().ago()).hours()).toBe(16);
    });
    it('will return 24', function() {
      expect(Date.diff(Date.today(), 1..day().ago()).hours()).toBe(24);
    });

    it('will return 72', function() {
      expect(Date.diff(Date.today(), 3..days().ago()).hours()).toBe(72);
    });
  });
});
