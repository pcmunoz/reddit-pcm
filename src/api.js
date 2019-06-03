var snoowrap = require('snoowrap');

export const API_REQUEST = new snoowrap({
  userAgent: 'reddit-pcm:v1.2.3 (by /u/pcmunoz)',
  accessToken: '-JRDGCulkpixuSVHqJfkJluWG_SU'
})

export const hotList = API_REQUEST.getHot();