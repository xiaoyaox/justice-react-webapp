// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import $ from 'jquery';
import ReactDOM from 'react-dom';
import * as Utils from 'utils/utils.jsx';
import client from 'client/web_client.jsx';

import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

import React from 'react';
import {Link} from 'react-router/es6';
import logo_icon from 'images/modules_img/logo_icon.png';
import edit_icon from 'images/modules_img/edit_icon.png';
import logOut_icon from 'images/modules_img/logOut_icon.png';

class ChooseModulesPage extends React.Component {
    constructor(props) {
        super(props);

        // this.handleSendLink = this.handleSendLink.bind(this);

        this.state = {
            error: '',
            updateText: ''
        };
    }
    render() {

        return (
            <div className='container'>
              <div className="modules_backgroundImg"></div>
              <div className='modules_content'>
                <div className='row'>
                  <div className='modules-header'>
                    <div className='col-sm-6'>
                        <div style={{textAlign:'left'}}>
                          <img className='' src={logo_icon} style={{display:'inline-block',width: '54px',margin: '0 0 2em'}}/>
                          <h1 style={{display:'inline-block',fontWeight:'bold',color:'#fff'}}>{global.window.mm_config.SiteName}</h1>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div style={{textAlign:'right'}}>
                          <a href='javascript:;' className='modules_font' style={{marginRight:'1.8em'}}>
                            <img className='' src={edit_icon} style={{display:'inline-block',width: '30px',margin: '1.5em 0 2em'}}/>
                            <span>编辑</span>
                          </a>
                          <a href='javascript:;' className='modules_font'>
                            <img className='' src={logOut_icon} style={{display:'inline-block',width: '30px',margin: '1.5em 0 2em'}}/>
                            <span>退出</span>
                          </a>
                        </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <a href='javascript:;' className='modules_font modules_item' style={{marginRight:'1%'}}>
                    <img className='' src={edit_icon} style={{display:'block',width: '30px',margin: '1.5em 0 2em'}}/>
                    <span>OA系统</span>
                  </a>
                  <a href='javascript:;' className='modules_font modules_item' style={{marginRight:'1%'}}>
                    <img className='' src={edit_icon} style={{display:'block',width: '30px',margin: '1.5em 0 2em'}}/>
                    <span>矫正系统</span>
                  </a>
                  <a href='javascript:;' className='modules_font modules_item' style={{marginRight:'1%'}}>
                    <img className='' src={edit_icon} style={{display:'block',width: '30px',margin: '1.5em 0 2em'}}/>
                    <span>档案管理</span>
                  </a>
                  <a href='javascript:;' className='modules_font modules_item' style={{marginRight:'1%'}}>
                    <img className='' src={edit_icon} style={{display:'block',width: '30px',margin: '1.5em 0 2em'}}/>
                    <span>电子通讯录</span>
                  </a>
                  <a href='javascript:;' className='modules_font modules_item' style={{marginRight:'1%'}}>
                    <img className='' src={edit_icon} style={{display:'block',width: '30px',margin: '1.5em 0 2em'}}/>
                    <span>电子通讯录</span>
                  </a>
                </div>

              </div>
            </div>
        );
    }
}

ChooseModulesPage.defaultProps = {
};
ChooseModulesPage.propTypes = {
    params: React.PropTypes.object.isRequired
};

export default ChooseModulesPage;
