import React from 'react';
import { IntlProvider } from 'react-intl'
import translations from './translations.json'
import { LANGUAGES } from './languages.js';


export default class IntlProviderConfigured extends React.Component {
    state = {
        loading: true,
        locale: ''
    }

    //Se não for passado idioma nenhum, carrega o idioma padrão.
    componentDidMount() {
        const currentUrlLang = window.location.pathname.split('/')[1]
        const currentLanguage = LANGUAGES[currentUrlLang]
        if(!currentLanguage) return window.location.href = `/${LANGUAGES.default}`

        this.setState({ locale: currentLanguage.code, loading: false })
    }

    render() {
        const locale = this.state.locale
        const { children } = this.props

        if(this.state.loading) return <div>Carregando...</div>

        return (
            <IntlProvider locale={locale} messages={translations[locale]}>
                {children}
            </IntlProvider>
        )
    }
}