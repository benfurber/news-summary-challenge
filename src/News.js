var feed = new XMLHttpRequest()
feed.open('GET', `http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=${apiKey}`)
feed.send(null) // nul??

feed.onReadyStateChange = () => {
  var DONE = 4
  var OK = 200
  if (feed.readyState === DONE) {
    if (feed.status === OK) {
      console.log(feed.responseText)
    } else {
      console.log('Error: ' + feed.status)
    }
  }
}

class News {
  constructor(apiKey) {
    this.apiKey = apiKey
  }
}
