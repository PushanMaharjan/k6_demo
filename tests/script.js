import http from "k6/http";
import { group, check } from "k6";

export const options = {
  stages: [
    { target: 30, duration: "10s" },
    { target: 60, duration: "40s" },
    { target: 90, duration: "30s" },
    { target: 90, duration: "3m" },
    { target: 0, duration: "20s" },
  ],
};

export default function () {
  group("API uptime", () => {
    const response = http.get(`https://test-api.k6.io/public/crocodiles/`);
    check(response, {
      "code should be 200": (res) => res.status === 200,
    });
  });
}
