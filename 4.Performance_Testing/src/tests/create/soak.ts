import { sleep, check } from 'k6';

import { create } from '../../api/create';

export let options = {
  stages: [
    { duration: '2m', target: 400 }, // ramp up to 400 users
    { duration: '3h56m', target: 400 }, // stay at 400 for ~4 hours
    { duration: '2m', target: 0 }, // scale down. (optional)
  ],
};

export default () => {
  const res = create();
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
};
