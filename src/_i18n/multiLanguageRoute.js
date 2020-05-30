const MultiLanguageRoute = (props) => {
    const defaultLanguage = LANGUAGES.default
    const hasLang = props.computedMatch.params.lang
    const is404Page = props.path
    const isBasePathWithoutLang = props.path === "/"

    if(isBasePathWithoutLang)  return  <Redirect to={`/${defaultLanguage}`} />
    if(!hasLang && !is404Page) return <Redirect to={`/${defaultLanguage}`} />

    return <Route {...props} />    
}