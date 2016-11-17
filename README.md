# Author
akshaybhatia10 



[Github](https://github.com/akshaybhatia10) 

# FreeCodeCamp API: Image Search Abstraction Layer

## User stories:
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example usage:

```text
https://searh.herokuapp.com/search/fire
https://searh.herokuapp.com/latest
```

## Example query output:

```js
[{
  "url": "http://data.whicdn.com/images/34129178/large.jpg",
  "snippet": "this image include: funny",
  "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9wRI3mrK8iXg7mcSZx8yfpwlR2W7dCXA3lGHvQ28SnKGsvGYt6eIflAIq",
  "context": "http://weheartit.com/entry/group/4233028"
}, {
  "url": "https://s-media-cache-ak0.pinimg.com/736x/bc/32/f3/bc32f3896ebe6cfc48d489f5e7674d7a.jpg",
  "snippet": "#lolcats funny cats:",
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhYqlh_TWw8ycQeSpt9MwPJLIbL7X9dFCjPpEmSyaIpMQlI-AXN75EUo",
  "context": "https://www.pinterest.com/pin/51298883228847846/"
}, {
  "url": "http://cdnstatic.visualizeus.com/thumbs/36/0b/funny,lolcat,cats,cat,lolcats,humor-360ba427d350494fb4e69b209a93a814_h.jpg",
  "snippet": "funny-pictures-cat-breaks-the-",
  "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3LYyfkNxQWcG6wmB6M2FgUZpMXbjxXhc-g4CJ18luXAvDBdBNrzXAZQ8",
  "context": "http://vi.sualize.us/funny_pictures_breaks_the_sound_barrier_lolcats_funny_cats_cat_picture_45U4.html"
}, {
  "url": "https://s-media-cache-ak0.pinimg.com/736x/41/d7/b2/41d7b23586ee2fb386d5c894abedd5ab.jpg",
  "snippet": "Saved from",
  "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8mlKrDxEzOh9PqCFiDhsdS-xwazvwTibd325l1DAUCC5dUUbq3ax9qI7M",
  "context": "https://www.pinterest.com/pin/233131718181511758/"
}, {
  "url": "http://s2.favim.com/orig/33/cat-funny-lol-lolcats-mean-Favim.com-261389.jpg",
  "snippet": "cat, funny, lol, lolcats, mean",
  "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjH2_3xIIzquPGN-GVgivEQ1Ib4T9W9mCRjcYBsvLNB-e_aWb213o2-qo4",
  "context": "http://favim.com/image/261389/"
}]
```

## Example output:

```js
[{
  "term": "fire",
  "when": "2016-10-22T94:21:29.441Z"
}, {
  "term": "image",
  "when": "2016-11-16T04:02:36.237Z"
}, {
  "term": "lolcats funny",
  "when": "2016-12-2T02:02:32.898Z"
}]
```