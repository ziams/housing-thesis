import { firestore } from "firebase";

export const addinformation = (project) => {
    return (dispatch, getState,{ getFirebase, getFirestore})=> {

        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            address:"Bangkok,Thailand",
            id:"0004",
            lat:"10",
            lng:"101",
            photo:"https://firebasestorage.googleapis.com/v0/b/housing-4b273.appspot.com/o/03_4.jpg?alt=media&token=1af0fa65-a260-4c68-92a8-92151cc2907c",
            title:"เสนานิคม 6",
            url:"https://sketchfab.com/models/ff8d3cd69cfa481d88c7e9041dc22710/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1",
            year:"1990"
        }).then(() =>{
            dispatch({ type:'CREATE_PROJECT',project });
        }).catch((err)=>{
            dispatch({ type: 'CREATE_PROJECT_ERROR',err});
        })
    }
};  