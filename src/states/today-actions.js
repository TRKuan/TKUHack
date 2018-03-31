
export function toChooseStory() {
    return {type: '@TODAY/TO_CHOOSE_STORY'};
}

export function postStory() {
    return {type: '@TODAY/POST_STORY'};
}
export function skipStory() {
    return {type: '@TODAY/SKIP_STORY'};
}
export function joinStory() {
    return {type: '@TODAY/JOIN_STORY'};
}

export function uploadPhoto(photo){
    return {
      type: '@CALENDAR/UPLOAD_PHOTO',
      photo
    }
}
