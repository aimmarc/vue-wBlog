/**
 * Created by 44719 on 2017/6/13.
 */
const STORAGE_KEY = 'todos-vuejs'
export default {
    fecth(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
}
