import api from "../services/api/api";

export async function getCep(cep, initialObjShow, setObjShow){

    try{

        const response = await api.get(`/${cep}/json`);

        if(response.data){
            setObjShow(response.data);
        }
        else{
            setObjShow(initialObjShow);
        }

    }
    catch{
        setObjShow(initialObjShow);
    }
}