function setHeaders(url, type = "json") {
  const spt = url.split("/")
  const host = spt[2]
  const origin = `${spt[0]}//${host}`
  return {
    host,
    origin,
    referer: url,
    "content-type":type==="json"?"application/json":type,
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    /* None */
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; M3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
  }
}

async function fetchIn(config) {
  return await fetch("https://ngl.link/api/submit", {
    url: "https://ngl.link/api/submit",
    method: "POST",
    ...config,
    headers: setHeaders("https://ngl.link/api/submit")
  })
}

module.exports = fetchIn
