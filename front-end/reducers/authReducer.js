

  const loginReducer = (prevState , action)=>{
    switch (action.type){
      case 'LOGIN':
        return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
        };
        case 'RETREIVE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
   
    }
  };
  export default loginReducer;     
      