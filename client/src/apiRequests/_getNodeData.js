import axios from 'axios';

export default async () => {
  return await axios({
    method: 'get',
    url: 'https://www.ltonod.es/api/v2/generators/3Jp9rSY8BCk8DbfDRcqeULNrecWRRP7ShLr/blocksperday/',
  })
    .then(res => res.data)
    .catch(err => { throw err })
}