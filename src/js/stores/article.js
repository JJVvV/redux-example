import assign from 'object-assign'

const initialState = {

};



export default function article(state = initialState, action){
  return assign({}, initialState, action.article);
}
