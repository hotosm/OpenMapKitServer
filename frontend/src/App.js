import React, { Component } from 'react';
import { Route } from "react-router-dom";

import { Header } from './components/header';
import { SubmissionList } from './components/submissionList';
import { LoginPanel } from './components/loginPanel';
import { FormList } from './components/forms/formList';
import { UploadForm } from './components/forms/uploadForm';
import { ArchivedForms } from './components/forms/archivedList';
import { UploadDeployment } from './components/deployments/upload';
import { SelectCreateDeployment } from './components/deployments/selectCreate';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="top-50">
          <Route exact path="/" component={FormList} />
          <Route exact path="/login" component={LoginPanel} />
          <Route exact path="/upload-form" component={UploadForm} />
          <Route exact path="/archived-forms" component={ArchivedForms} />
          <Route exact path="/deployments" component={SelectCreateDeployment} />
          <Route exact path="/deployments/:deployment" component={UploadDeployment} />
          <Route exact path="/submissions/:formId" component={SubmissionList} />
        </div>
      </div>
    );
  }
}

export default App;
