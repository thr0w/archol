
export async function genapp (packageUrls: string, builders: string) {
  return `

  declare type Icon = string

  declare type I18N = string | {
    [lang in Lang]?: string
  }
  
  declare type Lang = 'pt' | 'en'
  
  declare interface BuilderConfig {
    rootDir: string
  }
  
  declare type Roles = {
    [typeName: string]: Role
  }
  
  declare interface Role {
    description: I18N,
    icon: Icon
  }
  
  declare function declareApp (name: string, opts: {
    description: I18N,
    icon: Icon,
    uses: PackageUrls[],
    langs: Lang[],
    builders: Builders
  }): void
  
  declare interface IAction<T> {
    caption: I18N,
    icon?: Icon,
    run: "next" | ((data: T) => Promise<void>)
  }  
  declare type PackageUrls = ${packageUrls}
      
  declare types FunctionLevel = 'cpu' | 'io'| 'proc'
  declare interface Builders {
    ${builders}
  }
  `.split('\n')
}
