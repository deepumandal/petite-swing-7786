const { DASHBOARD_GET_PROJECTS_LOADING, DASHBOARD_GET_CHARTS_LOADING, DASHBOARD_GET_CHARTS1_LOADING, DASHBOARD_GET_ITEMS_LOADING, DASHBOARD_GET_PROJECTS_SUCCESS, DASHBOARD_GET_ITEMS_SUCCESS, DASHBOARD_GET_CHARTS1_SUCCESS, DASHBOARD_GET_CHARTS_SUCCESS, DASHBOARD_GET_PROJECTS_ERROR, DASHBOARD_GET_ITEMS_ERROR, DASHBOARD_GET_CHARTS1_ERROR, DASHBOARD_GET_CHARTS_ERROR } = require("./dashboard.types");

export const initState = {
    projects:{
        loading:false,
        error:false,
        data:null
    },
    charts:{
        loading:false,
        error:false,
        data:null
    },
    charts1:{
        loading:false,
        error:false,
        data:null
    },
    items:{
        loading:false,
        error:false,
        data:null
    },
}

const dashboardReducer = (state=initState,action)=>{
    switch(action.type){
        case DASHBOARD_GET_PROJECTS_LOADING:{
            return {
                ...state,projects:{...state.projects,loading:true,error:false}
            }
        }
        case DASHBOARD_GET_PROJECTS_SUCCESS:{
            return {
                ...state,projects:{loading:false,error:false,data:action.payload}
            }
        }
        case DASHBOARD_GET_PROJECTS_ERROR:{
            return {
                ...state,projects:{...state.projects,loading:false,error:true}
            }
        }
        case DASHBOARD_GET_CHARTS_LOADING:{
            return {
                ...state,projects:{...state.charts,loading:true,error:false}
            }
        }
        case DASHBOARD_GET_CHARTS_SUCCESS:{
            return {
                ...state,charts:{loading:false,error:false,data:action.payload}
            }
        }
        case DASHBOARD_GET_CHARTS_ERROR:{
            return {
                ...state,projects:{...state.charts,loading:false,error:true}
            }
        }
        case DASHBOARD_GET_CHARTS1_LOADING:{
            return {
                ...state,projects:{...state.charts1,loading:true,error:false}
            }
        }
        case DASHBOARD_GET_CHARTS1_SUCCESS:{
            return {
                ...state,charts1:{loading:false,error:false,data:action.payload}
            }
        }
        case DASHBOARD_GET_CHARTS1_ERROR:{
            return {
                ...state,projects:{...state.charts1,loading:false,error:true}
            }
        }
        case DASHBOARD_GET_ITEMS_LOADING:{
            return {
                ...state,projects:{...state.items,loading:true,error:false}
            }
        }
        case DASHBOARD_GET_ITEMS_SUCCESS:{
            return {
                ...state,items:{loading:false,error:false,data:action.payload}
            }
        }
        case DASHBOARD_GET_ITEMS_ERROR:{
            return {
                ...state,projects:{...state.items,loading:false,error:true}
            }
        }
        default:return state;
    }
}

export default dashboardReducer;