describe('DateDiff', function() {
  it('will return 1', function() {
    expect((new DateDiff(Date.today(), 7..days().ago()).weeks())).toBe(1);
  });

  it('will return 5', function() {
    expect((new DateDiff(Date.today(), 5..day().ago()).days())).toBe(5);
  });

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
    it('will return 24', function() {
      expect(Date.diff(new Date(2018, 3, 12), new Date(2018, 3, 11)).hours()).toBe(24);
    });

    it('will return 72', function() {
      expect(Date.diff(new Date(2018, 3, 12), new Date(2018, 3, 9)).hours()).toBe(72);
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
      expect(Date.diff(new Date(2018, 3, 12), new Date(2018, 3, 11)).seconds()).toBe(86400);
    });
  });

  describe('#seconds', function() {
    it('will return 3600', function() {
      expect(Date.diff(Date.today(), 1..hour().ago()).seconds()).toBe(3600);
    });
    it('will return 86400', function() {
      expect(Date.diff(new Date(2018, 3, 12), new Date(2018, 3, 11)).seconds()).toBe(86400);
    });
  });

  describe('#months', function() {
    it('will return 2', function() {
      expect(Date.diff(Date.today(), 2..months().ago()).months()).toBe(2);
    });
    it('will return 12', function() {
      expect(Date.diff(Date.today(), 1..year().ago()).months()).toBe(12);
    });
    it('will return 18', function() {
      expect(Date.diff(Date.today(), 18..months().ago()).months()).toBe(18);
    });
    it('will return 0.5', function() {
      expect(Date.diff(Date.today(), 15..days().ago()).months()).toBe(0.5);
    });
    it('will return 3.7', function() {
      expect(Date.diff(new Date(2015,11,1), new Date(2015, 8, 10)).months()).toBe(2.7);
    });
  });

  describe('#years', function() {
    it('will return 1', function() {
      expect(Date.diff(Date.today(), 1..year().ago()).years()).toBe(1);
    });
    it('will return 1.5', function() {
      expect(Date.diff(Date.today(), 18..months().ago()).years()).toBe(1.5);
    });
    it('will return 0.5', function() {
      expect(Date.diff(Date.today(), 6..months().ago()).years()).toBe(0.5);
    });
    it('will return 1.2', function() {
      expect(Date.diff(new Date(2016, 2, 1), new Date(2015, 0, 1)).years()).toBe(1.2);
    });
  });
});
