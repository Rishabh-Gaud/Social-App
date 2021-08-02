const AuthReducer = (state,action)=>{
    switch (action.type) {
        case "LOGIN_START":
            return{
                user:{
                    "profilePicture": "person/5.png",
                    "coverPicture": "",
                    "followers": [],
                    "followings": [],
                    "isAdmin": false,
                    "_id": "60f95c1f3db3f5263808ccfb",
                    "username": "gaud",
                    "email": "test1@gmail.com",
                   
                    "desc": "this is rishabh profile"
                },
                isfetching:false,
                error:false,
            };
            case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                isfetching:false,
                error:false,
            };
            case "LOGIN_FAILURE":
            return{
                user:null,
                isfetching:false,
                error:action.payload,
            };
            case "FOLLOW":
            return{
                ...state,
                user:{
                    ...state.user,
                    followings:[...state.user.followings,action.payload],
                },
            };
            
            case "UNFOLLOW":
                return{
                    ...state,
                    user:{
                        ...state.user,
                        followings:state.user.followings.filter(
                            (followings)=>followings!==action.payload
                        ),
                     },
                };
                
        default:
           return state;
    }
}
export default AuthReducer;