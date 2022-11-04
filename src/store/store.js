import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './slice/demoSlice';
export default configureStore({
    reducer: {
        demo:demoReducer,
    }
})

//   使用：const menuList = useSelector(state => state.demo);
//   const dispatch = useDispatch();