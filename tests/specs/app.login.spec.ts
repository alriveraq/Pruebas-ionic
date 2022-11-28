import { title } from 'process';
import {clearIndexedDB, pause, getUrl, restartApp, url} from '../helpers';

import Login from '../pageobjects/login';


describe('Login', () =>{
  beforeEach(async () => {
    await restartApp('/login');
    await clearIndexedDB('_ionicstorage');
    await url('/login');
  });

  it('La URL es /login', async () => {
    await expect((await getUrl()).pathname).toBe('/login');
  });

  it('Aparece barra roja', async ()=>{
    await Login.iniciarsesion('', '');
  });

  it('Aparecen los mensajes username and password required ', async ()=> {
    await Login.login();
  });

  it('incia sesion', async () => {
    await Login.iniciarsesion('test', 'test');

    await Login.login();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });

  it('Navegar con sesion iniciada', async () => {
    await Login.iniciarsesion('test', 'test');

    await Login.login();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');

    await Login.lateral();

    await pause(1000);

    await Login.acount();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/account');

    await Login.lateral();

    await pause(1000);

    await Login.suport();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/support');

    await Login.lateral();

    await pause(1000);

    await Login.logout();

    await pause(1000);

    await expect((await getUrl()).pathname).toBe('/app/tabs/schedule');
  });


});

