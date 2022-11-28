import { IonicInput, IonicButton, IonicItem, IonicMenu} from '../helpers';
import Page from './page';

class Login extends Page {

  get loginbutton(){
    return IonicButton.withTitle('Login') ;
  }

  get username() {
    return new IonicInput('ion-input [name="username"]');
  }
  get password() {
    return new IonicInput('ion-input [name="password"]');
  }

  get menu() {
    return new IonicMenu();
  }
  get cuenta(){
    return new IonicItem(`ion-item[routerlink="/account"]`);
  }

  get soporte(){
    return new IonicItem('');
  }

  get deslogearse(){
    return new IonicItem('');
  }

  async lateral(){
    return this.menu.open();

  }
  async login(){
    return this.loginbutton.tap();
  }

  async iniciarsesion(username: string, password: string) {
    await this.username.setValue(username);
    await this.password.setValue(password);
  }


  async acount(){
    return this.cuenta.tap();
  }

  async suport(){
    return this.soporte.tap();
  }

  async logout(){
    return this.deslogearse.tap();
  }

}

export default new Login();
