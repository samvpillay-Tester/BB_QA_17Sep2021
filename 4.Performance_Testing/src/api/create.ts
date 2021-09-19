import http, { RefinedResponse, ResponseType } from 'k6/http';

import { pathEnum } from '../support/enums/pathEnum';
import { ComputerRequest } from '../support/domain/computerRequest';

const url = `${pathEnum.baseUrl}${pathEnum.createPath}`;

export function create() : RefinedResponse<ResponseType | undefined> {
  const data = new ComputerRequest();

  const response = http.post(url, JSON.stringify(data),
                      { headers: { 'Content-Type': 'application/json' } });

  return response;
}
