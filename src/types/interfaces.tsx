export interface IApiComments {
    comments?: ICommentData;
  }
  
  export interface ICommentData {
    data?: IComment[];
    status: number;
    statusText: string;
    headers: Headers;
    config: Config;
    request: Env;
  }
  
  export interface IComment {
    postId?: number;
    id?: number;
    name?: string;
    email?: string;
    body?: string;
  }
  
  export interface Config {
    transitional: Transitional;
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Env;
    headers: Headers2;
    method: string;
    url: string;
  }
  
  export interface Headers2 {
    Accept: string;
  }
  
  export interface Env {
  }
  
  export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
  }
  
  export interface Headers {
    'cache-control': string;
    'content-type': string;
    expires: string;
    pragma: string;
  }
  