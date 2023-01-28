const initialState={
    warehouse:[],
    loading:false,
    setWare:false,
    commodity:[],
    setComm:false
}

export const Warehouse= (state=initialState, action)=>{
    switch(action.type){
        case "Feed_started":{
            return {...state, loading:true}
        }
        case "Feed_succeded":{
            return {
                ...state, loading:false, warehouse:action.payload.data, setWare:true
            }
        }
        case "Feed_fake_add":{
            return {
                ...state, warehouse:[action.payload, ...state.warehouse]
            }
        }
        case "Feed_failed":{
            return {
                ...state, loading:false, setWare:false
            }
        }
        case "Delete_succeded":{
            return {
                ...state, loading:false, warehouse:(state.warehouse.filter((w)=>{return w.id != action.payload.id}))
            }
        }
        case "Commodity_started":{
            return {...state, loading:true}
        }
        case "Commodity_succeded":{
            return {
                ...state, loading:false, commodity:action.payload.data, setComm:true
            }
        }
        case "Commodity_fake_add":{
            return {
                ...state, commodity:[action.payload, ...state.commodity]
            }
        }
        case "Commodity_failed":{
            return {
                ...state, loading:false, setComm:false
            }
        }
        default:{
            return state
        }
    }
}