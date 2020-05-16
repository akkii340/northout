const initialState = {
  users:[],
  isAuth:{ email:'',
    pass:'',
    auth:false}
  };
  
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_User':
      return {
          ...state,
       users:[...state.users,{
           email:action.payload.email,
           password:action.payload.password,
           isAuth:false
       }]
      };
      case 'Auth':
          return{
              ...state,
              isAuth:{
                  email:action.payload.email,
                  pass:action.payload.pass,
                  auth:true
              }
          }
  
    default:
      return state;
  }
};