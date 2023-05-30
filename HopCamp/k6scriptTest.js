import http from "k6/http";
import { check, sleep } from "k6";

export const option = {
  vus: 10,
  duration: "3m",
};

export default function () {
  let response = http.get("http://test.k6.io");
  check(response, {
    "status was 200": (r) => r.status == 200,
  });
  sleep(1);
}
