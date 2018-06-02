describe('A sample test', function () {
  var dummyKey = 999
  var news = new News(dummyKey)
  it('contains an apiKey', function () {
    assert.isEqual(news.apiKey, dummyKey)
  })
})
