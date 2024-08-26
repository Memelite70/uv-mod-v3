self.__uv$config = {
    prefix: '/static/tiw/',
    bare:'https://dont-sue-me-topvaz.topvazgeo.online/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://dont-sue-me-topvaz.topvazgeo.online/uv/uv.handler.js',
    bundle: 'https://dont-sue-me-topvaz.topvazgeo.online/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: 'https://dont-sue-me-topvaz.topvazgeo.online/uv/uv.sw.js',
};
