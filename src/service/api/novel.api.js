import axiosSerivce from './axiosService';

export function getNewestNovels(id) {
    return axiosSerivce.get(`api/getListNovel?type=NEW`);
}

export function getHotestNovels(id) {
    return axiosSerivce.get(`api/getListNovel?type=HOT`);
}

export function getCompletedNovels(id) {
    return axiosSerivce.get(`api/getListNovel?type=COMPLETED`);
}


