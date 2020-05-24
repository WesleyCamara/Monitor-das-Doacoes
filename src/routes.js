import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Page404 } from './components/menu/Page404';
import App from './App';


const LANGUAGES = {
    pt: {
        urlLang: 'pt',
        code: 'pt-BR'
    },
    en: {
        urlLang: 'en',
        code: 'en-US'
    }
}


const MultiLanguageRoute = (props) => {
    const defaultLanguage = LANGUAGES.pt.urlLang
    const hasLang = props.computedMatch.params.lang
    const is404Page = props.path
    const isBasePathWithoutLang = props.path === "/"

    //Se carregamento padrão ocorrer, define idioma padrão
    if(isBasePathWithoutLang)  return  <Redirect to={`/${defaultLanguage}`} />

    //Verifica se o parâmetro :lang foi informado na URL e se a página carregada não é a 404, se verdadeiro carrega o idioma padrão
    if(!hasLang && !is404Page) return <Redirect to={`/${defaultLanguage}`} />

    return <Route {...props} />    
}

export const Routes = () => {
    return (
        <Switch>
            <MultiLanguageRoute exact path="/"/>
            <MultiLanguageRoute exact path="/:lang" component={App}/>
            <MultiLanguageRoute path="*" component={Page404}/>
        </Switch>
    )
}