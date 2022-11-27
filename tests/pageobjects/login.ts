import { IonicInput, IonicButton, IonicItem} from '../helpers';
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

  get menu(){
    return IonicItem.withTitle('Account');
  }
  get cuenta(){
    return IonicItem.withTitle('Account');
  }
  async login(){
    return this.loginbutton.tap();
  }

  async iniciarsesion(username: string, password: string) {
    await this.username.setValue(username);
    await this.password.setValue(password);
  }

  async tocarcampos(username: string, password: string) {
    await this.username.setValue(username);
    await this.password.setValue(password);
  }

  async cuentaboton(){
    return this.cuenta.tap();
  }

}

export default new Login();
