import { title } from 'process';
import {clearIndexedDB, pause, getUrl, restartApp, url} from '../helpers';

import Login from '../pageobjects/login';


describe('Login', () =>{
  beforeEach(async () => {
    await restartApp('/login');
    await clearIndexedDB('_ionicstorage');
    await url('/login');
  });

  it('La pagina deberia llamarse login', async () => {
    await expect((await getUrl()).pathname).toBe('/login');
  });

  it('Boton login funciona', async ()=> {
    await Login.login();
  });

  it('Deberia inciar sesion', async () => {
    await Login.iniciarsesion('username', 'password');

    await Login.login();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });

  it('Tocar campos', async ()=>{
    await Login.iniciarsesion('', '');
  });

  it('Navegar con sesion iniciada', async () => {
    await Login.iniciarsesion('username', 'password');

    await Login.login();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');

    await Login.cuentaboton();

  });


});

