/**20201026 
 * React데코레이터&Mobx 적용 참조   
 * https://velog.io/@wlsdud2194/Mobx-%EB%8D%B0%EC%BD%94%EB%A0%88%EC%9D%B4%ED%84%B0-yarn-eject-%EC%97%86%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
 * https://velog.io/@hadmarine/MobX-with-React-Applying
 *  */

import { stores as layoutStores } from './layout';

 export default {
     ...layoutStores,
 };
