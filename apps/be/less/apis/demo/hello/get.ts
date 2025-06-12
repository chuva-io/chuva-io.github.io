import { Api } from '@less-ifc/types';
import type { HelloWorld } from "@chuva-template-monorepo/types";

const helloWorld: HelloWorld = {
  sayHello: (name?: string) => `Hello, ${name ?? "world"}!`,
};

export const process: Api.Handler = async (request: Api.Request, response: Api.Response) => {
  response.body = helloWorld.sayHello(request.query.name);
  return response;
}
