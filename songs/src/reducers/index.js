import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Borderlines', duration: '5:30' },
        { title: 'Honeycomb', duration: '12:00'},
        { title: 'Jake Leg', duration: '5:00'},
        { title: 'Dream House', duration: '9:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});