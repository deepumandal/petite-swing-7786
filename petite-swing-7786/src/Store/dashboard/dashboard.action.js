import { DASHBOARD_GET_PROJECTS_SUCCESS, DASHBOARD_GET_PROJECTS_LOADING, DASHBOARD_GET_CHARTS_LOADING, DASHBOARD_GET_CHARTS1_LOADING, DASHBOARD_GET_ITEMS_LOADING, DASHBOARD_GET_PROJECTS_ERROR, DASHBOARD_GET_CHARTS_ERROR, DASHBOARD_GET_CHARTS_SUCCESS, DASHBOARD_GET_CHARTS1_SUCCESS, DASHBOARD_GET_CHARTS1_ERROR, DASHBOARD_GET_ITEMS_SUCCESS, DASHBOARD_GET_ITEMS_ERROR } from "./dashboard.types"
import axios from 'axios';

// action creators
const getProjectsLoading = ()=>{
    return {
        type:DASHBOARD_GET_PROJECTS_LOADING

    }
}
const getProjectsSuccess = (data)=>{
    return {
        type:DASHBOARD_GET_PROJECTS_SUCCESS,
        payload:data
    }
}
const getProjectError = (err)=>{
    return {
        type:DASHBOARD_GET_PROJECTS_ERROR,
        payload:err
    }
}
const getChartsLoading = ()=>{
    return {
        type:DASHBOARD_GET_CHARTS_LOADING

    }
}
const getChartsSuccess = (data)=>{
    return {
        type:DASHBOARD_GET_CHARTS_SUCCESS,
        payload:data
    }
}
const getChartsError = (err)=>{
    return {
        type:DASHBOARD_GET_CHARTS_ERROR,
        payload:err
    }
}
const getCharts1Loading = ()=>{
    return {
        type:DASHBOARD_GET_CHARTS1_LOADING

    }
}
const getCharts1Success = (data)=>{
    return {
        type:DASHBOARD_GET_CHARTS1_SUCCESS,
        payload:data
    }
}
const getCharts1Error = (err)=>{
    return {
        type:DASHBOARD_GET_CHARTS1_ERROR,
        payload:err
    }
}
const getItemsLoading = ()=>{
    return {
        type:DASHBOARD_GET_ITEMS_LOADING,

    }
}
const getItemsSuccess = (data)=>{
    return {
        type:DASHBOARD_GET_ITEMS_SUCCESS,
        payload:data
    }
}
const getItemsError = (err)=>{
    return {
        type:DASHBOARD_GET_ITEMS_ERROR,
        payload:err
    }
}


//actual actions
export const getProjects = ()=>(dispatch)=>{
    dispatch(getProjectsLoading());

    return axios.get('http://localhost:8000/dashboard/projects')
    .then((res)=>dispatch(getProjectsSuccess(res.data.projects)))
    .catch((err)=>dispatch(getProjectError(err)))
}

export const getCharts = ()=>(dispatch)=>{
    dispatch(getChartsLoading());

    return axios.get('http://localhost:8000/dashboard/charts')
    .then((res)=>dispatch(getChartsSuccess(res.data.charts)))
    .catch((err)=>dispatch(getChartsError(err)))
}

export const getCharts1 = ()=>(dispatch)=>{
    dispatch(getCharts1Loading());

    return axios.get('http://localhost:8000/dashboard/charts1')
    .then((res)=>dispatch(getCharts1Success(res.data.charts1)))
    .catch((err)=>dispatch(getCharts1Error(err)))
}

export const getItems = ()=>(dispatch)=>{
    dispatch(getItemsLoading());

    return axios.get('http://localhost:8000/dashboard/items')
    .then((res)=>dispatch(getItemsSuccess(res.data.items)))
    .catch((err)=>dispatch(getItemsError(err)))
}