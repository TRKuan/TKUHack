
const initStoryBoardState = {
  screenMode: 'profilePage',
};


export function storyBoard(state = initStoryBoardState, action) {

    switch (action.type) {
    case '@STORYBOARD/SEE_FINISHED':
        return {
            ...state,
            screenMode: 'finishedList'
        };
    case '@STORYBOARD/SEE_UNFINISHED':
        return {
            ...state,
            screenMode: 'unFinishedList'
        };

    case '@STORYBOARD/TO_PROFILE':
        return {
            ...state,
            screenMode: 'profilePage'
        };
    default:
        return state;
    }
}
