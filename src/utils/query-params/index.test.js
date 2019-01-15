import { getQueryParams } from './index';

const urlQuery = '?reserved_appeal_code=testappealcode';

it('returns an object containing query params', () => {
  expect(getQueryParams(urlQuery)).toEqual({
    reserved_appeal_code: 'testappealcode',
  });
});
