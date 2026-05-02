export const config = { runtime: "edge" };

const _0x4f22 = ["\x54\x41\x52\x47\x45\x54\x5F\x44\x4F\x4D\x41\x49\x4E", "\x68\x6F\x73\x74", "\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E", "\x78\x2D\x72\x65\x61\x6C\x2D\x69\x70", "\x78\x2D\x66\x6F\x72\x77\x61\x72\x64\x65\x64\x2D\x66\x6F\x72", "\x78\x2D\x76\x65\x72\x63\x65\x6C\x2D", "\x6D\x61\x6E\x75\x61\x6C"];
const _0x51 = (i) => _0x4f22[i];

const T_B = (process.env[_0x51(0)] || "").replace(/\/$/, "");
const S_H = new Set([_0x51(1), _0x51(2), "keep-alive", "proxy-authenticate", "proxy-authorization", "te", "trailer", "transfer-encoding", "upgrade", "forwarded", "x-forwarded-host", "x-forwarded-proto", "x-forwarded-port"]);

export default async function (r) {
  if (!T_B) return new Response("Error 500", { status: 500 });
  
  try {
    const u = r['\x75\x72\x6C'];
    const pS = u.indexOf("/", 8);
    const tU = pS === -1 ? T_B + "/" : T_B + u.slice(pS);
    
    const hO = new Headers();
    let cI = null;

    for (const [k, v] of r.headers) {
      const lK = k.toLowerCase();
      if (S_H.has(lK) || lK.startsWith(_0x51(5))) continue;
      if (lK === _0x51(3)) { cI = v; continue; }
      if (lK === _0x51(4)) { if (!cI) cI = v.split(',')[0].trim(); continue; }
      hO.set(k, v);
    }

    if (cI) {
      hO.set(_0x51(4), cI);
      hO.set(_0x51(3), cI);
    }

    return await fetch(tU, {
      method: r.method,
      headers: hO,
      body: r.body,
      redirect: _0x51(6),
    });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}
