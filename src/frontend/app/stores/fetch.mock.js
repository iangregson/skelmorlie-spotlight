const articles = []

export default function fetch(url) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(articles))
  })
}