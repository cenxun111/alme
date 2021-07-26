import { postDataAPI } from '../../API/fetchData'
import { GLOBALTYPES } from './globalTypes'

export const POST_TYPES = {
    CREATE_POST:'CREATE_POST',
    LOADING_POST:'LOADING_POST',
    GET_POSTS:"GET_POSTS",
}

export const createNewsPost = (data) => async(dispatch) => {
    try{
        dispatch({type:GLOBALTYPES.ALERT,payload:{loading:true}})
        const res = await postDataAPI('createNewsPost',data)
        console.log(res)
        dispatch({
            type:POST_TYPES.CREATE_POST,
            payload:{...res.data}
        })
    dispatch({type:GLOBALTYPES.ALERT,payload:{loading:false}})}
    catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {err}
        })
    }
}