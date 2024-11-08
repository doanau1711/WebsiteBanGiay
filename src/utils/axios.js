import axios from 'axios';

import config from '~/config';
// cau hinh axios
// 1 phien ban axios mac dinh voi Url co so tu tep config
export default axios.create({
  baseURL: config.constants.BASE_URL,
});
// 1 axios rieng tu voi cac tieu de bo sung
export const axiosPrivate = axios.create({
  baseURL: config.constants.BASE_URL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', withCredentials: true },
});
