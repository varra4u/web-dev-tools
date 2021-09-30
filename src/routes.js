import React from 'react'
import {Route} from 'react-router'
import App from './components/dashboard'
// import About from './components/about';
import CustomJsonEditor from './components/jsoneditor/custom'
import CustomJsonDiff from './components/jsondiff/custom'
import CustomStringDiff from './components/jsondiff/strdiff'
import Base64Coder from './components/jsondiff/base64'
import JWTDecoder from './components/jsondiff/jwtdecode'

// import CustomJsonDiff from './components/jsondiff/adv/custom'

const IndexPage = () => {

    return <div>Welcome to Scrum Master<br/><a href="/story/1">Homepage</a></div>
}
const NotFoundPage = () => {

    return <div><h2>Not Found</h2><br/><a href="/story/1">Homepage</a></div>
}
export default(
    <Route>
        <Route path='/story/:id' exact component={App}/>
        <Route path='/json_editor' exact component={CustomJsonEditor}/>
        <Route path='/json_diff' exact component={CustomJsonDiff}/>
        <Route path='/text_diff' exact component={CustomStringDiff}/>
        <Route path='/base64_codec' exact component={Base64Coder}/>
        <Route path='/jwt_decode' exact component={JWTDecoder}/>
        <Route exact path="/" component={CustomJsonEditor} />
        <Route path='*' exact component={NotFoundPage}/>
    </Route>
)