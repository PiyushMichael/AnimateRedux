import {combineReducers} from 'redux';

function articles_reducer(state={},action){
    switch(action.type){
        case 'GET_ARTICLES': {
            return {...state,posts: action.payload};
        }
        default: return state;
    }
}

const combinedReducer = combineReducers({
    articles: articles_reducer
});

export default combinedReducer;