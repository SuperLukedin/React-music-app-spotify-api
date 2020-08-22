export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQD5dtRh_UzOeFjKo_0m8RSySKir5tUAeElFbqt8RZi74Offgstnqr3qzqh4TFAkpX1xSeoFRArQE-nuear1Q9AcqSJ2qpcR2HC5IbRJE3Gz06qSHJO6H9hoBlBKgDsNLaJ8gUVor0BlgQTK2TNPmTm1nMIGkQyHOjvU5QaRShxr-Xb5'
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state
    }   
}

export default reducer