import axiosSerivce from './axiosService';

export function getLastestReleaseNovels(id) {
  return axiosSerivce.get(`api/getListNovel?type=LATEST_RELEASE`);
}

export function getPopularNovels(id) {
  return axiosSerivce.get(`api/getListNovel?type=POPULAR`);
}

export function getNewestNovels(id) {
  return axiosSerivce.get(`api/getListNovel?type=NEW`);
}

export function getHotestNovels(id) {
  return axiosSerivce.get(`api/getListNovel?type=HOT`);
}

export function getCompletedNovels(id) {
  return axiosSerivce.get(`api/getListNovel?type=COMPLETED`);
}

export function searchNovels(genre = '', type = 'POPULAR', isOnlyCompleted = false, page = 1) {
  let url = `api/getNovelsByGenre?type=${type.toUpperCase()}`;
  if (genre) {
    if (genre === 'All') {
      //do nothing
    } else {
      url += `&genre=${genre.toUpperCase()}`;
    }
  }

  if (isOnlyCompleted) {
    url += `&status=completed`;
  }
  url += `&page=${page}`;

  console.log(url);

  return axiosSerivce.get(url);
}

export function getNovelInfo(id = '') {
  return axiosSerivce.get(`api/novelInfo/${id}`);
}

export function getNovelChapter(id = '') {
  return axiosSerivce.get(`api/getListChapter/${id}`)
}

export function getChapterContent(novel_id, chapter_id) {
  return axiosSerivce.get(`api/getChapterDetail?novel_id=${novel_id}&chapter_id=${chapter_id}`)
}
