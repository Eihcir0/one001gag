import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';

const middlewares = [SessionMiddleware];
const RootMiddleware = applyMiddleware(...middlewares);
export default RootMiddleware;
