import { Workspace, Application } from "./types";
import { resolve, join } from 'path'
import { buildApp } from './buildApp';
import { quasarMongo } from './quasar-mongo';
import { readFile } from './sys';

const rootDir = resolve(__dirname + '../../../../ws')

const ws: Workspace = {
  rootDir: rootDir,
  builders: {
    "quasar-mongo": quasarMongo
  },
  async getApp(name) {
    const str = await readFile(rootDir + name + '.app.json', {
      encoding: 'utf8'
    })
    return JSON.parse(str)
  }
}

async function build_ws() {
  const hw = await ws.getApp('hello/hw')
  await buildApp(ws, hw)
}

build_ws().then( () => console.log('ok') )