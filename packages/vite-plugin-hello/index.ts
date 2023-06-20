/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
import type { PluginOption } from 'vite'

const TOTAL_MSG_LENGTH = 40

function helloLog(str: string) {
  const repeatSize = Math.floor((TOTAL_MSG_LENGTH - str.length) / 2)
  console.log('='.repeat(repeatSize), 'hello', str, '='.repeat(repeatSize))
}

export default function helloPlugin(): PluginOption {
  const virtualModuleId = 'virtual:hello-plugin'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'hello-plugin',

    resolveId(id, importer, options) {
      if (id === virtualModuleId) {
        helloLog('resolveId')
        console.log('id', id)
        console.log('importer', importer)

        return resolvedVirtualModuleId
      }
    },

    load(id) {
      if (id === resolvedVirtualModuleId) {
        helloLog('load')
        return 'export default "Hello world!"'
      }
    },
  }
}
