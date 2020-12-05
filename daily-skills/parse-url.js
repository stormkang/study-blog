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
    searchObj: parseSearch(urlObj.search),
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
// console.log(parseUrl(`https://www.example.com:3000/home?page=4&name=jojn#top`));
console.log(parseUrl(`https://cn.bing.com/images/search?q=&view=detailv2&iss=rec&id=07BDA65E3862D653BC0562A277022B1AF4C8B640&ccid=iTes2NJJ&thid=OIP.iTes2NJJ6HyzFAStZlRD5QHaLH&first=1000&selectedIndex=1005&ajaxhist=0&FORM=O2MU01`));
