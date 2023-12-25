import React, {useState} from "react";
import msjEn from "../lang/en-US.json";
import msjEs from "../lang/es-Ar.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({children}) =>{
    let localDefault;
    let msjDefault;
    const langStatus = localStorage.getItem('langStored');

    if (langStatus){
        localDefault = langStatus;
        if (langStatus==="es-Ar"){
            msjDefault = msjEs
        }else if (langStatus==="en-US"){
            msjDefault = msjEn 
        }else{
            localDefault = "en-US"
            msjDefault = msjEn
        }
    }

const [msj, setMsj] = useState(msjDefault);
const [local, setLocal] = useState(localDefault);

const setLang = (lang) => {
    switch (lang) {
        case 'es-Ar': setMsj(msjEs);
                      setLocal('es-Ar')  ;
                      localStorage.setItem('langStored', 'es-Ar');
                      break;
        case 'en-US': setMsj(msjEn);
                      setLocal('en-US');
                      localStorage.setItem('langStored', 'en-US');
                      break;
        default:
                setMsj(msjEn);
                setLocal('en-Us');
                localStorage.setItem('langStored', 'en-US');  
    }
}

return (
    <langContext.Provider value={{setLang: setLang}}>
        <IntlProvider locale={local} messages={msj}>
            {children}
        </IntlProvider>
    </langContext.Provider>
)

}

export {langContext, LangProvider}
