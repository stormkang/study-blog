/**
 * @description 将给定的URL进行解析封装成对象并返回.
 * @author Ryan Kong
 * @since Sun Apr 19, 2020 at 13:43
 * @param {string} url 要解析的url
 * @returns {object} 解析后封装的对象
 */
const parseUrl = (url) => {
  const urlObj = new URL(url);
  // const urlObj = document.createElement('a');
  // urlObj.href = url;

  // search: '?page=4&name=jojn',
  const parseSearch = (search) => {
    let result = {};
    let _search = search.replace(/^\?/, '').split('&');
    _search.forEach(item => {
      const split = item.split('=');
      result[split[0]] = split[1];
    });
    return result;
  }

  return {
    protocol: urlObj.protocol,
    host: urlObj.host,
    hostname: urlObj.hostname,
    port: urlObj.port,
    pathname: urlObj.pathname,
    search: urlObj.search,
    search: parseSearch(urlObj.search),
    hash: urlObj.hash,
  };
}

/*
{
  protocol: 'https:',
  host: 'www.example.com:3000',
  hostname: 'www.example.com',
  port: '3000',
  pathname: '/home',
  search: { page: '4', name: 'jojn' },
  hash: '#top'
}
*/
console.log(parseUrl(`https://www.example.com:3000/home?page=4&name=jojn#top`));
