import axios from "axios";
import * as actionTypes from "../types/actionType";

const API_KEY = "qSPUWlpzwoesn5zIizBwJEsUrnBaQl9J";

//popular news

// export const popular = () => async (dispatch) => {

//     await axios.get("https://api.nytimes.com/svc/community/v3/user-content/url.json?api-key={qSPUWlpzwoesn5zIizBwJEsUrnBaQl9J}&offset=0&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F06%2F21%2Fscience%2Fgiant-squid-cephalopod-video.html")
//         .then(res => {
//             dispatch({
//                 type: actionTypes.POPULAR_SUCCESS,
//                 payload: {
//                     popularNews: res
//                 }
//             })
//         })
// }




export const popular = () => async (dispatch) => {

    await axios.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" + API_KEY)
        .then(res => {
            dispatch({
                type: actionTypes.POPULAR_SUCCESS,
                payload: {
                    popularNews: res.data.results
                }
            })
        })
}

//today news

export const today = () => async (dispatch) => {

    await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + API_KEY)
        .then(res => {
            dispatch({
                type: actionTypes.TODAY_SUCCESS,
                payload: {
                    todayNews: res.data.results
                }
            })
        })
}





// export const today = () => async (dispatch) => {
//     try {
//         const { todayNewsData } = await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + API_KEY)

//         dispatch({
//             type: actionTypes.TODAY_SUCCESS,
//             payload: {
//                 popularNews: todayNewsData
//             }
//         })
//     } catch (error) {
//         dispatch({
//             type: actionTypes.TODAY_FAILED,
//             payload: error.response.data.message
//         })
//     }
// }

// Clear Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: actionTypes.CLEAR_ERRORS
    })
}











// export const popularSuccess = (popularNewsData) => {
//     return {
//         type: actionTypes.POPULAR_SUCCESS,
//         payload: {
//             popularNews: popularNewsData
//         }
//     }
// }


// export const todaySuccess = (todayNewsData) => {
//     return {
//         type: actionTypes.TODAY_SUCCESS,
//         payload: {
//             todayNews: todayNewsData
//         }
//     }
// }


// export const popular = () => dispatch => {
//     axios.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" + API_KEY)
//         .then(res => {
//             dispatch(popularSuccess(res.data.results))
//         })
// }

// export const today = () => dispatch => {
//     axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + API_KEY)
//         .then(res => {
//             dispatch(todaySuccess(res.data.results))
//             // console.log(res.data.results);
//         })
// }






















// export const today = () => dispatch => {
//     axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + API_KEY)
//         .then(res => {
//             dispatch(todaySuccess(res.data.results))
//             // console.log(res.data.results);
//         })
// }