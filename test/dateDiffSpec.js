describe('DateDiff', function() {

  describe('#weeks', function() {
    it('will return 1', function() {
      expect(Date.diff(Date.today(), 7..days().ago()).weeks()).toBe(1);
    });

    it('will return 4', function() {
      expect(Date.diff(Date.today(), 28..days().ago()).weeks()).toBe(4);
    });

    it('will return 2.6', function() {
      expect(Date.diff(Date.today(), 18..days().ago()).weeks()).toBe(2.6);
    });

  });

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
    it('will return 1.5', function() {
      expect(Date.diff(Date.today(), 36..hours().ago()).days()).toBe(1.5);
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

  describe('#minutes', function() {
    it('will return 60', function() {
      expect(Date.diff(Date.today(), 1..hour().ago()).minutes()).toBe(60);
    });
    it('will return 180', function() {
      expect(Date.diff(Date.today(), 3..hours().ago()).minutes()).toBe(180);
    });
    it('will return 4320', function() {
      expect(Date.diff(Date.today(), 3..days().ago()).minutes()).toBe(4320);
    });
  });

  describe('#seconds', function() {
    it('will return 3600', function() {
      expect(Date.diff(Date.today(), 1..hour().ago()).seconds()).toBe(3600);
    });
    it('will return 86400', function() {
      expect(Date.diff(Date.today(), 1..day().ago()).seconds()).toBe(86400);
    });

  });
});
