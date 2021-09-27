import DateDiff from './date-diff'

const today = () => {
  return new Date()
}

const daysAgo = (n: number) => {
  const now = today()
  now.setDate(now.getDate() - n)
  return now
}

const hoursAgo = (n: number) => {
  const now = today()
  now.setHours(now.getHours() - n)
  return now
}

const monthsAgo = (n: number) => {
  const now = today()
  now.setMonth(now.getMonth() - n)
  return now
}

const yearsAgo = (n: number) => {
  const now = today()
  now.setFullYear(now.getFullYear() - n)
  return now
}

describe('DateDiff', () => {

  it('will return 1', () => {
    expect((new DateDiff(today(), daysAgo(7)).weeks())).toBe(1)
  })

  it('will return 5', () => {
    expect((new DateDiff(today(), daysAgo(5)).days())).toBe(5)
  })

  describe('#weeks', () => {
    it('will return 1', () => {
      expect(new DateDiff(today(), daysAgo(7)).weeks()).toBe(1)
    })

    it('will return 4', () => {
      expect(new DateDiff(today(), daysAgo(28)).weeks()).toBe(4)
    })

    it('will return 2.6', () => {
      expect(new DateDiff(today(), daysAgo(18)).weeks()).toBe(2.6)
    })

  })

  describe('#days', () => {
    it('will return 1', () => {
      expect(new DateDiff(today(), daysAgo(1)).days()).toBe(1)
    })

    it('will return 5', () => {
      expect(new DateDiff(today(), daysAgo(5)).days()).toBe(5)
    })

    it('will return 365', () => {
      expect(new DateDiff(today(), daysAgo(365)).days()).toBe(365)
    })
    it('will return 1.5', () => {
      expect(new DateDiff(today(), hoursAgo(36)).days()).toBe(1.5)
    })
  })

  describe('#hours', () => {
    it('will return 1', () => {
      expect(new DateDiff(today(), hoursAgo(1)).hours()).toBe(1)
    })
    it('will return 24', () => {
      expect(new DateDiff(new Date(2018, 3, 12), new Date(2018, 3, 11)).hours()).toBe(24)
    })

    it('will return 72', () => {
      expect(new DateDiff(new Date(2018, 3, 12), new Date(2018, 3, 9)).hours()).toBe(72)
    })
  })

  describe('#minutes', () => {
    it('will return 60', () => {
      expect(new DateDiff(today(), hoursAgo(1)).minutes()).toBe(60)
    })
    it('will return 180', () => {
      expect(new DateDiff(today(), hoursAgo(3)).minutes()).toBe(180)
    })
    it('will return 4320', () => {
      expect(new DateDiff(new Date(2018, 3, 12), new Date(2018, 3, 11)).seconds()).toBe(86400)
    })
  })

  describe('#seconds', () => {
    it('will return 3600', () => {
      expect(new DateDiff(today(), hoursAgo(1)).seconds()).toBe(3600)
    })
    it('will return 86400', () => {
      expect(new DateDiff(new Date(2018, 3, 12), new Date(2018, 3, 11)).seconds()).toBe(86400)
    })
  })

  describe('#months', () => {
    it('will return 2', () => {
      expect(new DateDiff(today(), monthsAgo(2)).months()).toBe(2)
    })
    it('will return 12', () => {
      expect(new DateDiff(today(), yearsAgo(1)).months()).toBe(12)
    })
    it('will return 18', () => {
      expect(new DateDiff(today(), monthsAgo(18)).months()).toBe(18)
    })
    it('will return 0.5', () => {
      expect(new DateDiff(today(), daysAgo(15)).months()).toBe(0.5)
    })
    it('will return 3.7', () => {
      expect(new DateDiff(new Date(2015, 11, 1), new Date(2015, 8, 10)).months()).toBe(2.7)
    })
  })

  describe('#years', () => {
    it('will return 1', () => {
      expect(new DateDiff(today(), yearsAgo(1)).years()).toBe(1)
    })
    it('will return 1.5', () => {
      expect(new DateDiff(today(), monthsAgo(18)).years()).toBe(1.5)
    })
    it('will return 0.5', () => {
      expect(new DateDiff(today(), monthsAgo(6)).years()).toBe(0.5)
    })
    it('will return 1.2', () => {
      expect(new DateDiff(new Date(2016, 2, 1), new Date(2015, 0, 1)).years()).toBe(1.2)
    })
  })

  describe('Date.diff shorthand', () => {
    it('will return 1', () => {
      expect(Date.diff(today(), yearsAgo(1)).years()).toBe(1)
    })
  })
})
