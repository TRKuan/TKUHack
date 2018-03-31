
const initTodayState = {
  screenMode: 'startJourney',
  photo: 'None'
};


export function today(state = initTodayState, action) {

    switch (action.type) {
    case '@TODAY/TO_CHOOSE_STORY':
        return {
            ...state,
            screenMode: 'chooseStory'
        };
    case '@TODAY/SKIP_STORY':
        return {
            ...state,
            screenMode: 'chooseStory'
        };
    case '@TODAY/JOIN_STORY':
        return {
            ...state,
            screenMode: 'postStory'
        };
    case '@TODAY/POST_STORY':
        return {
            ...state,
            screenMode: 'chooseStory'
        };
    case '@TODAY/UPLOAD_PHOTO':
        return {
            ...state,
            photo: action.photo
        };
    default:
        return state;
    }
}
