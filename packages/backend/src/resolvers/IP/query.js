const Query = {
  async userIp(parent, args, { request }) {
    const ip = request.headers["x-forwarded-for"] || request.ip;
    return {
      ip,
    };
  },
};

export default Query;