import React, { Component } from 'react';
import './Login.scss';
import { Icon } from 'antd-mobile';
import { List, InputItem, WhiteSpace ,Button} from 'antd-mobile';

export default class Login extends Component {
  handleClick = () => {
    this.inputRef.focus();
  };

  render() {

    return (
      <div className='login'>
        <div className="head">
          <span>
            <Icon type='left'></Icon>
          </span>
          <span>登录遇到问题</span>
        </div>
        <div className="hello">
          <span>您好，</span>
          <p>欢迎来到自如，立即<a href="/reg">注册</a></p>
        </div>
        <div className="inputMsg">
          <List className='nob'>
            <InputItem
              clear
              placeholder="请输入用户名/手机号/邮箱"
              ref={el => this.autoFocusInst = el}
              className='login_input'
            >
            </InputItem>
            <InputItem
              clear
              placeholder="请输入密码"
              ref={el => this.inputRef = el}
              className='login_input'
            >
            </InputItem>
          </List>
        </div>
        <div className="agree">
          同意<a href="#">《自如用户服务协议》</a>
        </div>
        <div className="tolog">
          <span className='duanxin'>验证码登录</span>
          <Button  className='lbut'>登录</Button>
        </div>
      </div>
    )
  }
}
