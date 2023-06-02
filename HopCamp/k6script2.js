import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  executor: 'ramping-arrival-rate',
  stages: [
    { duration: "2m", target: 1000 }
  ],
};

// export default function () {
//   let res = http.get('http://localhost:5173');
//   check(res, { 'status was 200': r => r.status == 200 });
//   sleep(1);
// }

export default function () {
let res1 = http.get('http://134.122.22.60:5001/api/campsites');
let res2 = http.get('http://134.122.22.60:5001/api/ratings');
let res3 = http.get('http://134.122.22.60:5001/api/camping-spots');
let res4 = http.get('http://134.122.22.60:5001/api/campers-also');
let res5 = http.get('http://134.122.22.60:5001/api/photogallery');
let res6 = http.get('http://134.122.22.60:5001/api/things-nearby');
check(res1, {'status was 200': r => r.status == 200 });
check(res2, {'status was 200': r => r.status == 200 });
check(res3, {'status was 200': r => r.status == 200 });
check(res4, {'status was 200': r => r.status == 200 });
check(res5, {'status was 200': r => r.status == 200 });
check(res6, {'status was 200': r => r.status == 200 });
sleep(1)
}