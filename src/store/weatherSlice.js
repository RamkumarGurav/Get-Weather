import {createSlice} from '@reduxjs/toolkit'
const API_URL='https://api.openweathermap.org/data/2.5/weather?'
const API_KEY='f4987b6c020fe6d3e63f510d989badc4'


const weatherSlice=createSlice({
name:'weather',
initialState:{
    status:{
        desc:'Scattered Clouds',
        imgCode:'02n',
        wind:"140",
        temp:'25',
humidity: '88',
pressure:'1020',

    },
    search:'bengaluru',
    noData:null,
},
reducers:{
    setStatus(state,action){
state.status.imgCode=action.payload.weather[0].icon;
state.status.desc=action.payload.weather[0].description;
state.status.temp=action.payload.main.temp;
state.status.humidity=action.payload.main.humidity;
state.status.pressure=action.payload.main.pressure;
state.status.wind=action.payload.wind.speed;

    },
    setSearch(state,action){
        state.search=action.payload

    },
    setNoData(state,action){
        state.noData='No Data Available or Enter valid City'
    }
    
}
})


export const weatherActions=weatherSlice.actions

export default weatherSlice

// thunks

export const recieveData =(search)=>{
    return async(dispatch)=>{
        try{
            const res=await fetch(`${API_URL}q=${search}&appid=${API_KEY}&units=metric`)
            const data=await res.json()
            dispatch(weatherActions.setStatus(data))
            console.log('data recived :'+data);
          }catch(error){
            console.log(error);
            dispatch(weatherActions.setNoData())
          }
          }



    }
